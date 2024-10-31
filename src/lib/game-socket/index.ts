import { Signal } from "@builder.io/qwik";
import { messageEvent } from "./messageEvent";
import { openEvent } from "./openEvent";
import { closeEvent } from "./closeEvent";
import { errorEvent } from "./errorEvent";
import { GameContextStore } from "~/game-context";
export * from './sendCarData'

export const connectGameSocket = (username: string) => {
    const serverSocketURL =
      import.meta.env.PUBLIC_ENV === "production"
        ? "wss://api.olems.no/car-game"
        : "ws://localhost:8080/car-game";
    const conn = new WebSocket(`${serverSocketURL}?username=${username}`);
    return conn
}

export const addGameSocketEvents = (conn: WebSocket, game: GameContextStore) => {
  conn.addEventListener("error", (e) => {
    errorEvent(e)
  });

  conn.addEventListener("close", (e) => {
    closeEvent(e, game)
  });

  conn.addEventListener("message", (e) => {
    messageEvent(e, game)
  });
  conn.addEventListener("open", (e) => {
    openEvent(e, game, conn)
  });
}
