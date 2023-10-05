import { Network } from "./types";

export const KEYS_FILENAME = "keys.txt";

export const MIN_BRIDGE_IN_ETH = 0.1; // нужно настроить
export const MAX_BRIDGE_IN_ETH = 0.15; // нужно настроить

export const DELAY_FROM_SEC = 100; // нужно настроить
export const DELAY_TO_SEC = 200; // нужно настроить

export const BRIDGE_CONTRACT = "0x6BEbC4925716945D46F0Ec336D5C2564F419682C";
export const BRIDGE_ABI = [
  "function depositEth() payable returns (uint256)",
];

export const RPC_URL = {
  [Network.ARBITRUM_GOERLI]: "https://goerli-rollup.arbitrum.io/rpc",
  [Network.GOERLI]: "https://ethereum-goerli.publicnode.com",
};

export const TX_SCAN = {
  [Network.ARBITRUM_GOERLI]: "https://goerli.arbiscan.io/tx/",
  [Network.GOERLI]: "https://goerli.etherscan.io/tx/",
};
