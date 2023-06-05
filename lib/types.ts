export enum ABIFunctionType {
  constructor = "constructor",
  function = "function",
  receive = "receive",
  fallback = "fallback",
  error = "error",
  event = "event",
}

export enum StateMutability {
  pure = "pure",
  view = "view",
  payable = "payable",
  nonpayable = "nonpayable",
}

export interface ABIArgument {
  name: string;
  type: string;
  indexed?: boolean;
}

export interface ABIFunction {
  name?: string;
  type: ABIFunctionType | string;

  payable?: boolean;
  constant?: boolean;
  anonymous?: boolean;
  inputs?: ABIArgument[];
  outputs?: ABIArgument[];

  stateMutability?: StateMutability | string;
}

export interface Preset {
  id: string;
  name: string;
  interface: ABIFunction[];
}
