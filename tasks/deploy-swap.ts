import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { SwapSourceMinter, SwapSourceMinter__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";
import { LINK_ADDRESSES, UNISWAP_ROUTER_ADDRESS } from "./constants";

task(`deploy-swap`, `Deploys SwapSourceMinter.sol smart contract`)
    .addOptionalParam(`router`, `The address of the Router contract on the source blockchain`)
    .addOptionalParam(`uniswapRouter`, `The address of the Uniswap V3 Router contract`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        // 應該是deploy的時候有錯？
        // See https://github.com/BuildBearLabs/UniswapV3/blob/main/scripts/deploy-Uniswap.js and modify as it.
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;
        const linkAddress = LINK_ADDRESSES[hre.network.name];
        const uniswapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);
        console.log(`ℹ️  Using ${rpcProviderUrl} as the RPC provider URL for the ${hre.network.name} blockchain`);

        const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy SourceMinter smart contract on the ${hre.network.name} blockchain using ${deployer.address} address, with the Router address ${routerAddress}, LINK address ${linkAddress}, and Uniswap Router address ${uniswapRouterAddress} provided as constructor arguments`);
        spinner.start();

        const swapSourceMinterFactory: SwapSourceMinter__factory = await hre.ethers.getContractFactory('SwapSourceMinter') as SwapSourceMinter__factory;
        const swapSourceMinter: SwapSourceMinter = await hre.ethers.deployContract("SwapSourceMinter", [routerAddress, linkAddress, uniswapRouterAddress]);
        await swapSourceMinter.waitForDeployment();


        spinner.stop();
        console.log(`✅ SourceMinter contract deployed at address ${swapSourceMinter.target} on the ${hre.network.name} blockchain`);
    });
