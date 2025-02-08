import { publicClient } from "./clients/public-client";
import { contract } from "./contract";
export const getBalance = async (creatorAddr: `0x${string}`) => {
  const balance = await publicClient.readContract({
    address: contract.address,
    abi: contract.abi,
    functionName: "creatorBalances",
    args: [creatorAddr],
  });
  return balance as bigint;
};
