import DadJokesABI from "./abi.json";
import { fetchJokes } from "./fetch-jokes";
import type { Joke } from "./types";
import { walletClient } from "./clients/wallet-client";
import { publicClient } from "./clients/public-client";
import { contract } from "./contract";
export {
  DadJokesABI,
  fetchJokes,
  type Joke,
  walletClient,
  publicClient,
  contract,
};
