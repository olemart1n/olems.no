import { type Joke } from "./types";
import { contract } from "./contract";

interface FetchJokes {
  jokes: Joke[];
  error: string | null;
}
export const fetchJokes = async (): Promise<FetchJokes> => {
  let data: FetchJokes = { jokes: [] as Joke[], error: null };
  try {
    const res = await contract.read["getJokes"]();
    data = { jokes: res as Joke[], error: null };
  } catch (error) {
    console.log(error);
    data = { jokes: [], error: "Error fetching jokes" };
  }

  return data;
};
