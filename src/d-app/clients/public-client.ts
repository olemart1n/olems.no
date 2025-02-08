import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import "viem/window";

// Create a public client for the Sepolia chain using the Alchemy API. Instantiated only once.
export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(
    "https://eth-sepolia.g.alchemy.com/v2/GF_j3GRungeLmYaFxUZPlhacYIAosfis",
  ),
});
