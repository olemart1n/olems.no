import { getContract } from "viem";
import dadJokesAbi from "./abi.json";
import { publicClient } from "./clients/public-client";

export const contract = getContract({
  address: "0x4e0B83F298EFa98842837692Cc8b8AcFEA8879e9",
  abi: dadJokesAbi,
  client: publicClient,
});
console.log("contract");
