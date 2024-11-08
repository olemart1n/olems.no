import { sendCarData } from "./send-car-data";
import { addControls } from "../controls";
import { carData } from "../game-global";
import type { GameContextStore } from "../game-context";
export const openEvent = (
  e: Event,
  gameStore: GameContextStore,
  conn: WebSocket,
) => {
  gameStore.isConnectedToSocket = true;
  addControls(conn, gameStore);
  gameStore.mainEl.value?.requestPointerLock();
  carData.username = gameStore.username.value;
  setInterval(() => {
    sendCarData(conn);
  }, 50);
};
