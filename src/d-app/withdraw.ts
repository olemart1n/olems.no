import { sepolia } from "viem/chains";
import { contract } from "./contract";
import { walletClient } from "./clients/wallet-client";
import { publicClient } from "./clients/public-client";
export const withdraw = async (accountAddress: `0x${string}`) => {
  await walletClient().switchChain({ id: sepolia.id });

  const { request } = await publicClient.simulateContract({
    address: contract.address,
    abi: contract.abi,
    functionName: "withdrawBalance",
    account: accountAddress,
  });

  await walletClient().writeContract(request);

  return true;
};
