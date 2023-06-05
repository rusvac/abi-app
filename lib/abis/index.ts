import { Preset } from "../types";

import OWNABLEABI from "./ownable.json";
import ERC20ABI from "./erc20.json";
import ERC721ABI from "./erc721.json";
import ERC4626ABI from "./erc4626.json";

import LINKORACLEABI from "./linkOracle.json";

import ERC20LOCKERABI from "./erc20locker.json";

export const OWNABLE: Preset = {
  id: "Ownable",
  name: "Ownable",
  interface: OWNABLEABI,
};

const ERC20: Preset = {
  id: "ERC20",
  name: "ERC20",
  interface: ERC20ABI,
};

const ERC721: Preset = {
  id: "ERC721",
  name: "ERC721",
  interface: ERC721ABI,
};

const ERC4626: Preset = {
  id: "ERC4626",
  name: "ERC4626",
  interface: ERC4626ABI,
};

const LINKORACLE: Preset = {
  id: "LinkOracle",
  name: "Chainlink Oracle",
  interface: LINKORACLEABI,
};

const ERC20LOCKER: Preset = {
  id: "IERC20LOCKER",
  name: "IERC20LOCKER",
  interface: ERC20LOCKERABI,
};

export const abis = [OWNABLE, ERC20, ERC721, ERC4626, LINKORACLE, ERC20LOCKER];
