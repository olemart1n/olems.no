import { getFullnodeUrl } from "@mysten/sui/client";
import {
  DEVNET_COUNTER_PACKAGE_ID,
  TESTNET_COUNTER_PACKAGE_ID,
  MAINNET_COUNTER_PACKAGE_ID,
} from "./package-id";

export const networkConfig = (net: string) => {
  let config;
  const devnet = {
    url: getFullnodeUrl("devnet"),

    counterPackageId: DEVNET_COUNTER_PACKAGE_ID,
  };
  const testnet = {
    url: getFullnodeUrl("testnet"),

    counterPackageId: TESTNET_COUNTER_PACKAGE_ID,
  };
  const mainnet = {
    url: getFullnodeUrl("mainnet"),

    counterPackageId: MAINNET_COUNTER_PACKAGE_ID,
  };

  switch (net) {
    case "devnet":
      config = devnet;
      break;

    case "mainnet":
      config = mainnet;
      break;

    case "testnet":
      config = testnet;
      break;

    default:
      break;
  }

  return config;
};
