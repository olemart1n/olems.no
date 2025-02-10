import { contract } from "./contract";
import { walletClient } from "./clients/wallet-client";
import { publicClient } from "./clients/public-client";
import { sepolia } from "viem/chains";

export const postJoke = async (
  setup: string,
  punchline: string,
  accountAddress: `0x${string}`,
) => {
  const wc = walletClient(); // runs only in the browser and does not perform requests to a server
  await wc.switchChain({ id: sepolia.id });

  if (accountAddress.length === 0) return;
  const { request } = await publicClient.simulateContract({
    address: contract.address,
    abi: contract.abi,
    functionName: "addJoke",
    args: [setup, punchline],
    account: accountAddress,
  });

  try {
    await wc.writeContract(request);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
