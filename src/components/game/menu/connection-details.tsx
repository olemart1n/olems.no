import { component$, useContext } from "@builder.io/qwik";
import gameContext from "~/game/game-context";
export const ConnectionDetails = component$(() => {
  const c = useContext(gameContext);
  return (
    <>
      {c.isConnectedToSocket ? (
        <p>Ditt brukernavn: {c.username}</p>
      ) : (
        <p>Ditt brukernavn:</p>
      )}
      <p>Aktive spillere: {c.connectedPlayersLength}</p>
      <div class="flex place-items-center gap-2">
        <p>Forbindelse: </p>
        {c.isConnectedToSocket ? (
          <p class="h-3 w-3 rounded-full bg-green-500"></p>
        ) : (
          <p class="h-3 w-3 rounded-full bg-red-400"></p>
        )}
      </div>
    </>
  );
});
