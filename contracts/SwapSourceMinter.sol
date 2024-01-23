// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./utils/Withdraw.sol";

interface IWETH {
    function withdraw(uint256 wad) external;
}

interface IERC20Permit is IERC20 {
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    function nonces(address owner) external view returns (uint256);
}

contract SwapSourceMinter is Withdraw {
    enum PayFeesIn {
        Native,
        LINK
    }

    address immutable i_router;
    address immutable i_link;
    address private immutable ghoTokenAddress = 0xc4bF5CbDaBE595361438F8c6a187bDc330539c60;
    address private immutable wethAddress = 0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14;
    address private immutable uniswapRouterAddress = 0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD;
    ISwapRouter public immutable swapRouter;
    uint24 public constant poolFee = 3000; // Pool fee tier (0.3%)

    event MessageSent(bytes32 messageId);

    constructor(
        address router, 
        address link, 
        address _swapRouter
    ) {
        i_router = router;
        i_link = link;
        swapRouter = ISwapRouter(_swapRouter);
        LinkTokenInterface(i_link).approve(i_router, type(uint256).max);
    }

    receive() external payable {}

    function permitGHO(
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        IERC20Permit(ghoTokenAddress).permit(msg.sender, uniswapRouterAddress, value, deadline, v, r, s);
    }

    function swapGHOForETH(uint256 amountIn) private returns (uint256 amountOut) {
        // Transfer GHO tokens to this contract
        TransferHelper.safeTransferFrom(ghoTokenAddress, msg.sender, address(this), amountIn);

        // Approve the router to spend GHO
        TransferHelper.safeApprove(ghoTokenAddress, address(swapRouter), amountIn);

        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: ghoTokenAddress,
                tokenOut: wethAddress,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

        // Execute the swap to get WETH
        amountOut = swapRouter.exactInputSingle(params);

        // Unwrap WETH to ETH
        IWETH(wethAddress).withdraw(amountOut);
    }

    function testSwapGHOForETH(
        uint256 amountIn
    ) public {
        swapGHOForETH(amountIn);
    }

    function testPermitSwapGHOForETH(
        uint256 amountIn,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public {
        IERC20Permit(ghoTokenAddress).permit(msg.sender, uniswapRouterAddress, value, deadline, v, r, s);
        swapGHOForETH(amountIn);
    }

    function testPermit(
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public {
        IERC20Permit(ghoTokenAddress).permit(msg.sender, uniswapRouterAddress, value, deadline, v, r, s);
    }

    function mint(
        uint64 destinationChainSelector,
        address nftAddress, // NFT contract address
        address receiver,
        PayFeesIn payFeesIn,
        uint256 ghoAmount, // Amount of GHO to swap
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s

    ) external {
        IERC20Permit(ghoTokenAddress).permit(msg.sender, uniswapRouterAddress, ghoAmount, deadline, v, r, s);
        // Swap GHO for ETH
        swapGHOForETH(ghoAmount);

        // Construct the CCIP message
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encodeWithSignature("mint(address,bytes)", nftAddress, abi.encodeWithSignature("mint(address)", msg.sender)),
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: payFeesIn == PayFeesIn.LINK ? i_link : address(0)
        });

        uint256 fee = IRouterClient(i_router).getFee(
            destinationChainSelector,
            message
        );

        bytes32 messageId;
        if (payFeesIn == PayFeesIn.LINK) {
            messageId = IRouterClient(i_router).ccipSend(
                destinationChainSelector,
                message
            );
        } else {
            messageId = IRouterClient(i_router).ccipSend{value: fee}(
                destinationChainSelector,
                message
            );
        }

        emit MessageSent(messageId);
    }
}
