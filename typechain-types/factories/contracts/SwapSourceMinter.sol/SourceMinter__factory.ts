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
import type { NonPayableOverrides } from "../../../common";
import type {
  SourceMinter,
  SourceMinterInterface,
} from "../../../contracts/SwapSourceMinter.sol/SourceMinter";

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
      {
        internalType: "address",
        name: "_swapRouter",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "enum SourceMinter.PayFeesIn",
        name: "payFeesIn",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "ghoAmount",
        type: "uint256",
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
    inputs: [],
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
  "0x61012060405273c4bf5cbdabe595361438f8c6a187bdc330539c6073ffffffffffffffffffffffffffffffffffffffff1660c09073ffffffffffffffffffffffffffffffffffffffff1681525073fff9976782d46cc05630d1f6ebab18b2324d6b1473ffffffffffffffffffffffffffffffffffffffff1660e09073ffffffffffffffffffffffffffffffffffffffff16815250348015620000a057600080fd5b50604051620022db380380620022db8339818101604052810190620000c69190620004ac565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200013b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001329062000569565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620001c257620001c1816200031360201b60201c565b5b5050508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff166101008173ffffffffffffffffffffffffffffffffffffffff168152505060a05173ffffffffffffffffffffffffffffffffffffffff1663095ea7b36080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401620002c3929190620005b7565b6020604051808303816000875af1158015620002e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000309919062000621565b50505050620006c5565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000384576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200037b90620006a3565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004748262000447565b9050919050565b620004868162000467565b81146200049257600080fd5b50565b600081519050620004a6816200047b565b92915050565b600080600060608486031215620004c857620004c762000442565b5b6000620004d88682870162000495565b9350506020620004eb8682870162000495565b9250506040620004fe8682870162000495565b9150509250925092565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b60006200055160188362000508565b91506200055e8262000519565b602082019050919050565b60006020820190508181036000830152620005848162000542565b9050919050565b620005968162000467565b82525050565b6000819050919050565b620005b1816200059c565b82525050565b6000604082019050620005ce60008301856200058b565b620005dd6020830184620005a6565b9392505050565b60008115159050919050565b620005fb81620005e4565b81146200060757600080fd5b50565b6000815190506200061b81620005f0565b92915050565b6000602082840312156200063a576200063962000442565b5b60006200064a848285016200060a565b91505092915050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006200068b60178362000508565b9150620006988262000653565b602082019050919050565b60006020820190508181036000830152620006be816200067c565b9050919050565b60805160a05160c05160e05161010051611ba06200073b6000396000818161055b01528181610a760152610b7c015260008181610ae70152610c1a015260008181610a2901528181610a550152610aab015260006106da01526000818161072e015281816107f9015261089e0152611ba06000f3fe60806040526004361061007f5760003560e01c80638da5cb5b1161004e5780638da5cb5b1461011f578063c31c9c071461014a578063f1dc9b7214610175578063f2fde38b1461019e57610086565b8063089fe6aa1461008b5780633aeac4e1146100b657806351cff8d9146100df57806379ba50971461010857610086565b3661008657005b600080fd5b34801561009757600080fd5b506100a06101c7565b6040516100ad91906110d0565b60405180910390f35b3480156100c257600080fd5b506100dd60048036038101906100d8919061114e565b6101cd565b005b3480156100eb57600080fd5b506101066004803603810190610101919061118e565b6102d7565b005b34801561011457600080fd5b5061011d61039b565b005b34801561012b57600080fd5b50610134610530565b60405161014191906111ca565b60405180910390f35b34801561015657600080fd5b5061015f610559565b60405161016c9190611244565b60405180910390f35b34801561018157600080fd5b5061019c600480360381019061019791906112fa565b61057d565b005b3480156101aa57600080fd5b506101c560048036038101906101c0919061118e565b61097e565b005b610bb881565b6101d5610992565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161021091906111ca565b602060405180830381865afa15801561022d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102519190611376565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b815260040161028e9291906113b2565b6020604051808303816000875af11580156102ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d19190611413565b50505050565b6102df610992565b600047905060008273ffffffffffffffffffffffffffffffffffffffff168260405161030a90611471565b60006040518083038185875af1925050503d8060008114610347576040519150601f19603f3d011682016040523d82523d6000602084013e61034c565b606091505b5050905080610396573383836040517f9d11f56300000000000000000000000000000000000000000000000000000000815260040161038d93929190611486565b60405180910390fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461042b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104229061151a565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b61058681610a22565b5060006040518060a00160405280856040516020016105a591906111ca565b6040516020818303038152906040528152602001336040516024016105ca91906111ca565b6040516020818303038152906040527f6a627842000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508152602001600067ffffffffffffffff8111156106675761066661153a565b5b6040519080825280602002602001820160405280156106a057816020015b61068d611082565b8152602001906001900390816106855790505b5081526020016001808111156106b9576106b8611569565b5b8560018111156106cc576106cb611569565b5b146106d85760006106fa565b7f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff16815260200160405180602001604052806000815250815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166320487ded87846040518363ffffffff1660e01b81526004016107879291906117be565b602060405180830381865afa1580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c89190611376565b905060006001808111156107df576107de611569565b5b8560018111156107f2576107f1611569565b5b0361089c577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f988856040518363ffffffff1660e01b81526004016108529291906117be565b6020604051808303816000875af1158015610871573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108959190611824565b905061093e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f98389866040518463ffffffff1660e01b81526004016108f89291906117be565b60206040518083038185885af1158015610916573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061093b9190611824565b90505b7f54791b38f3859327992a1ca0590ad3c0f08feba98d1a4f56ab0dca74d203392a8160405161096d9190611860565b60405180910390a150505050505050565b610986610992565b61098f81610ca9565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a17906118c7565b60405180910390fd5b565b6000610a507f0000000000000000000000000000000000000000000000000000000000000000333085610dd5565b610a9b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084610f2d565b60006040518061010001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200142815260200184815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf389826040518263ffffffff1660e01b8152600401610bd391906119a7565b6020604051808303816000875af1158015610bf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c169190611376565b91507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b8152600401610c7191906119c3565b600060405180830381600087803b158015610c8b57600080fd5b505af1158015610c9f573d6000803e3d6000fd5b5050505050919050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0e90611a2a565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6000808573ffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b868686604051602401610e0c93929190611486565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610e769190611a7b565b6000604051808303816000865af19150503d8060008114610eb3576040519150601f19603f3d011682016040523d82523d6000602084013e610eb8565b606091505b5091509150818015610ee65750600081511480610ee5575080806020019051810190610ee49190611413565b5b5b610f25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1c90611ade565b60405180910390fd5b505050505050565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401610f629291906113b2565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610fcc9190611a7b565b6000604051808303816000865af19150503d8060008114611009576040519150601f19603f3d011682016040523d82523d6000602084013e61100e565b606091505b509150915081801561103c575060008151148061103b57508080602001905181019061103a9190611413565b5b5b61107b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107290611b4a565b60405180910390fd5b5050505050565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600062ffffff82169050919050565b6110ca816110b2565b82525050565b60006020820190506110e560008301846110c1565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061111b826110f0565b9050919050565b61112b81611110565b811461113657600080fd5b50565b60008135905061114881611122565b92915050565b60008060408385031215611165576111646110eb565b5b600061117385828601611139565b925050602061118485828601611139565b9150509250929050565b6000602082840312156111a4576111a36110eb565b5b60006111b284828501611139565b91505092915050565b6111c481611110565b82525050565b60006020820190506111df60008301846111bb565b92915050565b6000819050919050565b600061120a611205611200846110f0565b6111e5565b6110f0565b9050919050565b600061121c826111ef565b9050919050565b600061122e82611211565b9050919050565b61123e81611223565b82525050565b60006020820190506112596000830184611235565b92915050565b600067ffffffffffffffff82169050919050565b61127c8161125f565b811461128757600080fd5b50565b60008135905061129981611273565b92915050565b600281106112ac57600080fd5b50565b6000813590506112be8161129f565b92915050565b6000819050919050565b6112d7816112c4565b81146112e257600080fd5b50565b6000813590506112f4816112ce565b92915050565b60008060008060808587031215611314576113136110eb565b5b60006113228782880161128a565b945050602061133387828801611139565b9350506040611344878288016112af565b9250506060611355878288016112e5565b91505092959194509250565b600081519050611370816112ce565b92915050565b60006020828403121561138c5761138b6110eb565b5b600061139a84828501611361565b91505092915050565b6113ac816112c4565b82525050565b60006040820190506113c760008301856111bb565b6113d460208301846113a3565b9392505050565b60008115159050919050565b6113f0816113db565b81146113fb57600080fd5b50565b60008151905061140d816113e7565b92915050565b600060208284031215611429576114286110eb565b5b6000611437848285016113fe565b91505092915050565b600081905092915050565b50565b600061145b600083611440565b91506114668261144b565b600082019050919050565b600061147c8261144e565b9150819050919050565b600060608201905061149b60008301866111bb565b6114a860208301856111bb565b6114b560408301846113a3565b949350505050565b600082825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b60006115046016836114bd565b915061150f826114ce565b602082019050919050565b60006020820190508181036000830152611533816114f7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6115a18161125f565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115e15780820151818401526020810190506115c6565b60008484015250505050565b6000601f19601f8301169050919050565b6000611609826115a7565b61161381856115b2565b93506116238185602086016115c3565b61162c816115ed565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61166c81611110565b82525050565b61167b816112c4565b82525050565b6040820160008201516116976000850182611663565b5060208201516116aa6020850182611672565b50505050565b60006116bc8383611681565b60408301905092915050565b6000602082019050919050565b60006116e082611637565b6116ea8185611642565b93506116f583611653565b8060005b8381101561172657815161170d88826116b0565b9750611718836116c8565b9250506001810190506116f9565b5085935050505092915050565b600060a083016000830151848203600086015261175082826115fe565b9150506020830151848203602086015261176a82826115fe565b9150506040830151848203604086015261178482826116d5565b91505060608301516117996060860182611663565b50608083015184820360808601526117b182826115fe565b9150508091505092915050565b60006040820190506117d36000830185611598565b81810360208301526117e58184611733565b90509392505050565b6000819050919050565b611801816117ee565b811461180c57600080fd5b50565b60008151905061181e816117f8565b92915050565b60006020828403121561183a576118396110eb565b5b60006118488482850161180f565b91505092915050565b61185a816117ee565b82525050565b60006020820190506118756000830184611851565b92915050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006118b16016836114bd565b91506118bc8261187b565b602082019050919050565b600060208201905081810360008301526118e0816118a4565b9050919050565b6118f0816110b2565b82525050565b6118ff816110f0565b82525050565b6101008201600082015161191c6000850182611663565b50602082015161192f6020850182611663565b50604082015161194260408501826118e7565b5060608201516119556060850182611663565b5060808201516119686080850182611672565b5060a082015161197b60a0850182611672565b5060c082015161198e60c0850182611672565b5060e08201516119a160e08501826118f6565b50505050565b6000610100820190506119bd6000830184611905565b92915050565b60006020820190506119d860008301846113a3565b92915050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000611a146017836114bd565b9150611a1f826119de565b602082019050919050565b60006020820190508181036000830152611a4381611a07565b9050919050565b6000611a55826115a7565b611a5f8185611440565b9350611a6f8185602086016115c3565b80840191505092915050565b6000611a878284611a4a565b915081905092915050565b7f5354460000000000000000000000000000000000000000000000000000000000600082015250565b6000611ac86003836114bd565b9150611ad382611a92565b602082019050919050565b60006020820190508181036000830152611af781611abb565b9050919050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b6000611b346002836114bd565b9150611b3f82611afe565b602082019050919050565b60006020820190508181036000830152611b6381611b27565b905091905056fea2646970667358221220628e2371e3b79eaa4474e4773277350eb940d1199723b527c841ffaea972c47a64736f6c63430008130033";

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
    _swapRouter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      router,
      link,
      _swapRouter,
      overrides || {}
    );
  }
  override deploy(
    router: AddressLike,
    link: AddressLike,
    _swapRouter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(router, link, _swapRouter, overrides || {}) as Promise<
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
