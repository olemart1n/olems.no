import { addControls } from "../../controls";
import { globalVar } from "../../global-var";
import { addUsernameToCar } from "../../three/mesh/text/add-username-to-car.ts";
import type { GameContextStore } from "../../game-context";

export const playerJoins = (gameStore: GameContextStore) => {
  addControls(gameStore);
  addUsernameToCar();
  gameStore.mainEl.value?.requestPointerLock();
  gameStore.isInGame = true;
  gameStore.hpPercent = 100;
  globalVar.conn.socket?.send(
    JSON.stringify({
      name: "player_joins",
    }),
  );
};
