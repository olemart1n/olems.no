import { sendCarData } from "./send-car-data";
import { addControls } from "../three/controls";
import type { GameContextStore } from "../game-context";
export const openEvent = (
  e: Event,
  gameStore: GameContextStore,
  conn: WebSocket,
) => {
  gameStore.isConnectedToSocket = true;
  addControls(gameStore.mainEl, gameStore.isMenu);
  gameStore.mainEl.value?.requestPointerLock();

  setInterval(() => {
    sendCarData(conn, gameStore.username.value);
  }, 50);
};
