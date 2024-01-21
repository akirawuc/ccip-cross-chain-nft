import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { getPayFeesIn, getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { SwapSourceMinter, SwapSourceMinter__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`cross-chain-mint`, `Mints the new NFT by sending the Cross-Chain Message`)
    .addParam(`sourceBlockchain`, `The name of the source blockchain (for example ethereumSepolia)`)
    .addParam(`swapSourceMinter`, `The address of the SwapSourceMinter.sol smart contract on the source blockchain`)
    .addParam(`destinationBlockchain`, `The name of the destination blockchain (for example polygonMumbai)`)
    .addParam(`destinationMinter`, `The address of the DestinationMinter.sol smart contract on the destination blockchain`)
    .addParam(`payFeesIn`, `Choose between 'Native' and 'LINK'`)
    .setAction(async (taskArguments: TaskArguments) => {
        const { sourceBlockchain, swapSourceMinter, destinationBlockchain, destinationMinter, payFeesIn } = taskArguments;

        const privateKey = getPrivateKey();
        const sourceRpcProviderUrl = getProviderRpcUrl(sourceBlockchain);

        const sourceProvider = new ethers.JsonRpcProvider(sourceRpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const signer = wallet.connect(sourceProvider);

        const spinner: Spinner = new Spinner();

        const swapSourceMinterContract: SwapSourceMinter = SwapSourceMinter__factory.connect(swapSourceMinter, signer);

        const destinationChainSelector = getRouterConfig(destinationBlockchain).chainSelector;
        const fees = getPayFeesIn(payFeesIn);

        console.log(`ℹ️  Attempting to call the mint function of the swapSourceMinter.sol smart contract on the ${sourceBlockchain} from ${signer.address} account`);
        spinner.start();

        const nftAddress = "0xfE5b74e9d65B800aAfaDE81B21580D05a53252Ec"; // Replace with actual NFT address
        const ghoAmount = ethers.parseUnits("1", 18); // 1 GHO with 18 decimals

        const tx = await swapSourceMinterContract.mint(
            destinationChainSelector,
            nftAddress,
            destinationMinter,
            fees,
            ghoAmount
        );

        const receipt = await tx.wait();

        spinner.stop();
        console.log(`✅ Mint request sent, transaction hash: ${tx.hash}`);
        
        if(receipt != null) {
            console.log(`✅ Transaction confirmed in block ${receipt.blockNumber}`);
        } else {
            console.log(`❌ Receipt is null`);
        }

        console.log(`✅ Task cross-chain-mint finished with the execution`);
    });
