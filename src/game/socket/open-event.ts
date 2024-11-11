import { sendCarData } from "./send-car-data";
import { addControls } from "../controls";
import { carData } from "../game-global";
import { activePlayers } from "../game-global";
import { mesh } from "../three";
import type { GameContextStore } from "../game-context";
import { addUsernameToCar } from "../three/mesh/text/add-username-to-car.ts";

export const openEvent = (
  e: Event,
  gameStore: GameContextStore,
  conn: WebSocket,
) => {
  // @ts-ignore
  const url = e.target?.url;
  const username = new URL(url!).searchParams.get("username");
  gameStore.isConnectedToSocket = true;
  gameStore.mainEl.value?.requestPointerLock();
  addControls(conn, gameStore);
  carData.username = username!;
  activePlayers.push({ car: mesh.car, username: username! });

  addUsernameToCar(username!);

  setInterval(() => {
    sendCarData(conn);
  }, 50);
};
