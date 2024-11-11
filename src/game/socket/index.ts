import { messageEvent } from "./message-event";
import { openEvent } from "./open-event";
import { closeEvent } from "./close-event";
import { errorEvent } from "./error-event";
import type { GameContextStore } from "../game-context";

export const connectGameSocket = (username: string) => {
  const serverSocketURL =
    import.meta.env.PUBLIC_ENV === "production"
      ? "wss://api.olems.no/car-game"
      : "ws://localhost:8080/car-game";
  const conn = new WebSocket(`${serverSocketURL}?username=${username}`);
  return conn;
};

export const connectToSocket = (username: string, game: GameContextStore) => {
  const serverSocketURL =
    import.meta.env.PUBLIC_ENV === "production"
      ? "wss://api.olems.no/car-game"
      : "ws://localhost:8080/car-game";
  const conn = new WebSocket(`${serverSocketURL}?username=${username}`);
  conn.addEventListener("error", (e) => {
    errorEvent(e);
  });

  conn.addEventListener("close", (e) => {
    closeEvent(e, game, conn);
  });

  conn.addEventListener("message", (e) => {
    messageEvent(e, game);
  });
  conn.addEventListener("open", (e) => {
    openEvent(e, game, conn);
  });
};
