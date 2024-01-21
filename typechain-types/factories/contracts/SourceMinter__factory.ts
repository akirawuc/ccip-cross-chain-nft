/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SourceMinter,
  SourceMinterInterface,
} from "../../contracts/SourceMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "FailedToWithdrawEth",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "enum SourceMinter.PayFeesIn",
        name: "payFeesIn",
        type: "uint8",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001a9838038062001a988339818101604052810190620000379190620003e7565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a3906200048f565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620001335762000132816200024e60201b60201c565b5b5050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505060a05173ffffffffffffffffffffffffffffffffffffffff1663095ea7b36080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401620001ff929190620004dd565b6020604051808303816000875af11580156200021f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000245919062000547565b505050620005eb565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620002bf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002b690620005c9565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003af8262000382565b9050919050565b620003c181620003a2565b8114620003cd57600080fd5b50565b600081519050620003e181620003b6565b92915050565b600080604083850312156200040157620004006200037d565b5b60006200041185828601620003d0565b92505060206200042485828601620003d0565b9150509250929050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b6000620004776018836200042e565b915062000484826200043f565b602082019050919050565b60006020820190508181036000830152620004aa8162000468565b9050919050565b620004bc81620003a2565b82525050565b6000819050919050565b620004d781620004c2565b82525050565b6000604082019050620004f46000830185620004b1565b620005036020830184620004cc565b9392505050565b60008115159050919050565b62000521816200050a565b81146200052d57600080fd5b50565b600081519050620005418162000516565b92915050565b60006020828403121562000560576200055f6200037d565b5b6000620005708482850162000530565b91505092915050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000620005b16017836200042e565b9150620005be8262000579565b602082019050919050565b60006020820190508181036000830152620005e481620005a2565b9050919050565b60805160a0516114796200061f60003960006103bf015260008181610413015281816104de015261058301526114796000f3fe6080604052600436106100595760003560e01c80630774daa0146100655780633aeac4e11461008e57806351cff8d9146100b757806379ba5097146100e05780638da5cb5b146100f7578063f2fde38b1461012257610060565b3661006057005b600080fd5b34801561007157600080fd5b5061008c60048036038101906100879190610cb8565b61014b565b005b34801561009a57600080fd5b506100b560048036038101906100b09190610d1f565b610664565b005b3480156100c357600080fd5b506100de60048036038101906100d99190610d5f565b61076e565b005b3480156100ec57600080fd5b506100f5610832565b005b34801561010357600080fd5b5061010c6109c7565b6040516101199190610d9b565b60405180910390f35b34801561012e57600080fd5b5061014960048036038101906101449190610d5f565b6109f0565b005b6000833360405160240161015f9190610d9b565b6040516020818303038152906040527f6a627842000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516024016101ed929190610e46565b6040516020818303038152906040527fb510391f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060006040518060a001604052808560405160200161028a9190610d9b565b6040516020818303038152906040528152602001336040516024016102af9190610d9b565b6040516020818303038152906040527f6a627842000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508152602001600067ffffffffffffffff81111561034c5761034b610e76565b5b60405190808252806020026020018201604052801561038557816020015b610372610bc0565b81526020019060019003908161036a5790505b50815260200160018081111561039e5761039d610ea5565b5b8560018111156103b1576103b0610ea5565b5b146103bd5760006103df565b7f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff16815260200160405180602001604052806000815250815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166320487ded88846040518363ffffffff1660e01b815260040161046c9291906110be565b602060405180830381865afa158015610489573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ad919061111a565b905060006001808111156104c4576104c3610ea5565b5b8560018111156104d7576104d6610ea5565b5b03610581577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f989856040518363ffffffff1660e01b81526004016105379291906110be565b6020604051808303816000875af1158015610556573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057a919061117d565b9050610623565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f9838a866040518463ffffffff1660e01b81526004016105dd9291906110be565b60206040518083038185885af11580156105fb573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610620919061117d565b90505b7f54791b38f3859327992a1ca0590ad3c0f08feba98d1a4f56ab0dca74d203392a8160405161065291906111b9565b60405180910390a15050505050505050565b61066c610a04565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106a79190610d9b565b602060405180830381865afa1580156106c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e8919061111a565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b81526004016107259291906111e3565b6020604051808303816000875af1158015610744573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107689190611244565b50505050565b610776610a04565b600047905060008273ffffffffffffffffffffffffffffffffffffffff16826040516107a1906112a2565b60006040518083038185875af1925050503d80600081146107de576040519150601f19603f3d011682016040523d82523d6000602084013e6107e3565b606091505b505090508061082d573383836040517f9d11f563000000000000000000000000000000000000000000000000000000008152600401610824939291906112b7565b60405180910390fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b99061134b565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6109f8610a04565b610a0181610a94565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a89906113b7565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af990611423565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600080fd5b600067ffffffffffffffff82169050919050565b610c1281610bf5565b8114610c1d57600080fd5b50565b600081359050610c2f81610c09565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c6082610c35565b9050919050565b610c7081610c55565b8114610c7b57600080fd5b50565b600081359050610c8d81610c67565b92915050565b60028110610ca057600080fd5b50565b600081359050610cb281610c93565b92915050565b60008060008060808587031215610cd257610cd1610bf0565b5b6000610ce087828801610c20565b9450506020610cf187828801610c7e565b9350506040610d0287828801610c7e565b9250506060610d1387828801610ca3565b91505092959194509250565b60008060408385031215610d3657610d35610bf0565b5b6000610d4485828601610c7e565b9250506020610d5585828601610c7e565b9150509250929050565b600060208284031215610d7557610d74610bf0565b5b6000610d8384828501610c7e565b91505092915050565b610d9581610c55565b82525050565b6000602082019050610db06000830184610d8c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610df0578082015181840152602081019050610dd5565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e1882610db6565b610e228185610dc1565b9350610e32818560208601610dd2565b610e3b81610dfc565b840191505092915050565b6000604082019050610e5b6000830185610d8c565b8181036020830152610e6d8184610e0d565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b610edd81610bf5565b82525050565b600082825260208201905092915050565b6000610eff82610db6565b610f098185610ee3565b9350610f19818560208601610dd2565b610f2281610dfc565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610f6281610c55565b82525050565b6000819050919050565b610f7b81610f68565b82525050565b604082016000820151610f976000850182610f59565b506020820151610faa6020850182610f72565b50505050565b6000610fbc8383610f81565b60408301905092915050565b6000602082019050919050565b6000610fe082610f2d565b610fea8185610f38565b9350610ff583610f49565b8060005b8381101561102657815161100d8882610fb0565b975061101883610fc8565b925050600181019050610ff9565b5085935050505092915050565b600060a08301600083015184820360008601526110508282610ef4565b9150506020830151848203602086015261106a8282610ef4565b915050604083015184820360408601526110848282610fd5565b91505060608301516110996060860182610f59565b50608083015184820360808601526110b18282610ef4565b9150508091505092915050565b60006040820190506110d36000830185610ed4565b81810360208301526110e58184611033565b90509392505050565b6110f781610f68565b811461110257600080fd5b50565b600081519050611114816110ee565b92915050565b6000602082840312156111305761112f610bf0565b5b600061113e84828501611105565b91505092915050565b6000819050919050565b61115a81611147565b811461116557600080fd5b50565b60008151905061117781611151565b92915050565b60006020828403121561119357611192610bf0565b5b60006111a184828501611168565b91505092915050565b6111b381611147565b82525050565b60006020820190506111ce60008301846111aa565b92915050565b6111dd81610f68565b82525050565b60006040820190506111f86000830185610d8c565b61120560208301846111d4565b9392505050565b60008115159050919050565b6112218161120c565b811461122c57600080fd5b50565b60008151905061123e81611218565b92915050565b60006020828403121561125a57611259610bf0565b5b60006112688482850161122f565b91505092915050565b600081905092915050565b50565b600061128c600083611271565b91506112978261127c565b600082019050919050565b60006112ad8261127f565b9150819050919050565b60006060820190506112cc6000830186610d8c565b6112d96020830185610d8c565b6112e660408301846111d4565b949350505050565b600082825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b60006113356016836112ee565b9150611340826112ff565b602082019050919050565b6000602082019050818103600083015261136481611328565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006113a16016836112ee565b91506113ac8261136b565b602082019050919050565b600060208201905081810360008301526113d081611394565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b600061140d6017836112ee565b9150611418826113d7565b602082019050919050565b6000602082019050818103600083015261143c81611400565b905091905056fea2646970667358221220e3fb45c55386d49ba177ef5364cea5627175e83afc4da15d939f6311cdfd799d64736f6c63430008130033";

type SourceMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SourceMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SourceMinter__factory extends ContractFactory {
  constructor(...args: SourceMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    router: AddressLike,
    link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(router, link, overrides || {});
  }
  override deploy(
    router: AddressLike,
    link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(router, link, overrides || {}) as Promise<
      SourceMinter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SourceMinter__factory {
    return super.connect(runner) as SourceMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SourceMinterInterface {
    return new Interface(_abi) as SourceMinterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SourceMinter {
    return new Contract(address, _abi, runner) as unknown as SourceMinter;
  }
}
