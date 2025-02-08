import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";

export const walletClient = () => {
  // Check for window.ethereum
  if (!window.ethereum) {
    throw new Error("No wallet found");
  }
  const transport = custom(window.ethereum);

  const walletClient = createWalletClient({
    chain: sepolia,
    transport,
  });
  return walletClient;
};
