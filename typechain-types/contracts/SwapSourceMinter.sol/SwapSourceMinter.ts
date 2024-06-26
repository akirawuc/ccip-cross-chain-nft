/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface SwapSourceMinterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "ghoToken"
      | "ghoTokenAddress"
      | "mint"
      | "owner"
      | "poolFee"
      | "swapRouter"
      | "testPermit"
      | "testPermitSwapGHOForETH"
      | "testPermitSwapGHOForETH2"
      | "testPermitSwapGHOForETH3"
      | "transferOwnership"
      | "weth"
      | "wethAddress"
      | "withdraw"
      | "withdrawToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "MessageSent"
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ghoToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ghoTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testPermit",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testPermitSwapGHOForETH",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testPermitSwapGHOForETH2",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testPermitSwapGHOForETH3",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ghoToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ghoTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "testPermit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testPermitSwapGHOForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testPermitSwapGHOForETH2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testPermitSwapGHOForETH3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
}

export namespace MessageSentEvent {
  export type InputTuple = [messageId: BytesLike];
  export type OutputTuple = [messageId: string];
  export interface OutputObject {
    messageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SwapSourceMinter extends BaseContract {
  connect(runner?: ContractRunner | null): SwapSourceMinter;
  waitForDeployment(): Promise<this>;

  interface: SwapSourceMinterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  ghoToken: TypedContractMethod<[], [string], "view">;

  ghoTokenAddress: TypedContractMethod<[], [string], "view">;

  mint: TypedContractMethod<
    [
      destinationChainSelector: BigNumberish,
      nftAddress: AddressLike,
      receiver: AddressLike,
      payFeesIn: BigNumberish,
      ghoAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  poolFee: TypedContractMethod<[], [bigint], "view">;

  swapRouter: TypedContractMethod<[], [string], "view">;

  testPermit: TypedContractMethod<
    [
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  testPermitSwapGHOForETH: TypedContractMethod<
    [
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  testPermitSwapGHOForETH2: TypedContractMethod<
    [
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  testPermitSwapGHOForETH3: TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      poolFee0: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  weth: TypedContractMethod<[], [string], "view">;

  wethAddress: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [beneficiary: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawToken: TypedContractMethod<
    [beneficiary: AddressLike, token: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "ghoToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ghoTokenAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [
      destinationChainSelector: BigNumberish,
      nftAddress: AddressLike,
      receiver: AddressLike,
      payFeesIn: BigNumberish,
      ghoAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poolFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "swapRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "testPermit"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "testPermitSwapGHOForETH"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "testPermitSwapGHOForETH2"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "testPermitSwapGHOForETH3"
  ): TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      amountIn: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      poolFee0: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "weth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wethAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[beneficiary: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawToken"
  ): TypedContractMethod<
    [beneficiary: AddressLike, token: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "MessageSent"
  ): TypedContractEvent<
    MessageSentEvent.InputTuple,
    MessageSentEvent.OutputTuple,
    MessageSentEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "MessageSent(bytes32)": TypedContractEvent<
      MessageSentEvent.InputTuple,
      MessageSentEvent.OutputTuple,
      MessageSentEvent.OutputObject
    >;
    MessageSent: TypedContractEvent<
      MessageSentEvent.InputTuple,
      MessageSentEvent.OutputTuple,
      MessageSentEvent.OutputObject
    >;

    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
