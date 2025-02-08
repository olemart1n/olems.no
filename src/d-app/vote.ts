import { contract } from "./contract";
import { walletClient } from "./clients/wallet-client";
import { publicClient } from "./clients/public-client";
import { sepolia } from "viem/chains";
import { parseEther } from "viem";

export const vote = async (
  type: number,
  jokeIndex: number,
  accountAddress: `0x${string}`,
) => {
  const wc = walletClient(); // runs only in the browser and does not perform requests to a server
  await wc.switchChain({ id: sepolia.id });

  let rewardAmount: string;

  switch (type) {
    case 1:
      rewardAmount = "0.001";
      break;
    case 2:
      rewardAmount = "0.005";
      break;
    case 3:
      rewardAmount = "0.001";
      break;
    default:
      throw new Error("Invalid reward type");
  }
  const rewardAmountBigInt = parseEther(rewardAmount);

  console.log(`Sending reward amount: ${rewardAmountBigInt} for type: ${type}`);
  // Should ideally be run on the server
  const { request } = await publicClient.simulateContract({
    address: contract.address,
    abi: contract.abi,
    functionName: "rewardJoke",
    args: [jokeIndex, BigInt(type)],
    account: accountAddress,
    value: rewardAmountBigInt,
  });
  await wc.writeContract(request);
};
