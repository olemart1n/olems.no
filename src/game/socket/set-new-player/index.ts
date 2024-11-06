import meshFactory from "~/game/three/mesh-factory";
import { activePlayers } from "~/game/game-global";
import type { GameContextStore } from "~/game/game-context";
import { scene } from "~/game/three";
export const setNewPlayer = (username: string, game: GameContextStore) => {
  const car = meshFactory.car();
  activePlayers.push({ car: car, username: username });
  scene.add(car);
  game.notificationMesssage = username + " ble med";
  game.isNotification.value = true;
  //
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
};
