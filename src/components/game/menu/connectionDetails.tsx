import { component$, useContext } from "@builder.io/qwik";
import gameContext from "~/game-context";
export const ConnectionDetails = component$(() => {
  const c = useContext(gameContext);
  return (
    <>
      <p>Active players: {c.connectedPlayersLength}</p>
      <div class="flex place-items-center gap-2">
        <p>Connection Status: </p>
        {c.isConnectedToSocket ? (
          <p class="h-3 w-3 rounded-full bg-green-500"></p>
        ) : (
          <p class="h-3 w-3 rounded-full bg-red-400"></p>
        )}
      </div>
    </>
  );
});
