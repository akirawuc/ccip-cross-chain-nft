import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { Wallet, ethers } from "ethers";
import { getPayFeesIn, getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { SwapSourceMinter, SwapSourceMinter__factory, IERC20Permit, IERC20Permit__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task("execute-swap", "Executes the swapGHOForETH function in the SwapSourceMinter contract")
    .addParam("swapSourceMinter", "The address of the SwapSourceMinter contract")
    .addParam("ghoAmount", "The amount of GHO to swap (in ethers)")
    .setAction(async (taskArguments: TaskArguments, hre) => {
        const { swapSourceMinter, ghoAmount } = taskArguments;

        const privateKey = hre.config.networks[hre.network.name].accounts[0];
        const rpcProviderUrl = hre.config.networks[hre.network.name].url;
        console.log(`chain id: ${hre.config.networks[hre.network.name].chainId}`);

        const provider = new hre.ethers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey, provider);
        const signer = wallet.connect(provider);


        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Executing swapGHOForETH function of the SwapSourceMinter contract at ${swapSourceMinter}`);
        spinner.start();

        const ghoToken = '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60';
        // const ghoContract = await hre.ethers.getContractAt('IERC20', ghoToken) as IERC20;
        console.log(swapSourceMinter);
        const ghoContract: IERC20Permit = IERC20Permit__factory.connect(ghoToken, signer);
        const swapSourceMinterContract: SwapSourceMinter = SwapSourceMinter__factory.connect(swapSourceMinter, signer);

        const parsedGhoAmount = ethers.parseUnits(ghoAmount, 8);

        const nonce = await ghoContract.nonces(wallet.address);
        const deadline = 17058302600006 + 1705830266;
        const value = ethers.parseUnits(ghoAmount, 8);
        console.log(hre.config.networks[hre.network.name].chainId);
        const domain = {
            name: "Gho Token",
            version: '1',
            chainId: 11155111,
            verifyingContract: ghoToken
        };
        const types = {
            Permit: [
                { name: 'owner', type: 'address' },
                { name: 'spender', type: 'address' },
                { name: 'value', type: 'uint256' },
                { name: 'nonce', type: 'uint256' },
                { name: 'deadline', type: 'uint256' }
            ]
        };
        const uniswapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
        const permitData = {
            owner: wallet.address,
            spender: swapSourceMinter,
            value,
            nonce,
            deadline
        };
        const signature = await signer.signTypedData(domain, types, permitData);
        console.log(`signature: ${signature}`);
        const { v, r, s } = ethers.Signature.from(signature);
        console.log(`v: ${v}`);
        console.log(`r: ${r}`);
        console.log(`s: ${s}`);
        const fees = getPayFeesIn('Native');

        // Approve the SwapSourceMinter contract to spend GHO tokens
        // await ghoContract.permit(wallet.address, uniswapRouterAddress, value, deadline, v, r, s);

        // Execute the swap
        // const permit_tx = await swapSourceMinterContract.testPermitSwapGHOForETH(parsedGhoAmount, deadline, v, r, s);
        // const permit_receipt = await permit_tx.wait();
        // console.log(`✅ Permit executed successfully, transaction hash: ${permit_receipt.transactionHash}`);
        const wethAddress = '0xfff9976782d46cc05630d1f6ebab18b2324d6b14';
        const tx = await swapSourceMinterContract.testPermitSwapGHOForETH3(ghoToken, wethAddress, parsedGhoAmount, deadline, v, r, s, 3000);
        const receipt = await tx.wait();

        spinner.stop();
        console.log(`✅ Swap executed successfully, transaction hash: ${permit_receipt.transactionHash}`);
    });

export default {};
