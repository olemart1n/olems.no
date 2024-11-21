import meshFactory from "~/game/three/mesh-factory";
import { globalVar } from "~/game/global-var";
import type * as type from "~/game/global-var/type";
import type { GameContextStore } from "~/game/game-context";
import { scene } from "~/game/three";
export const playerJoins = (player: type.Player, game: GameContextStore) => {
  game.notificationMesssage = player.username + " ble med i spillet";
  game.isNotification.value = true;
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
  if (player.id === globalVar.carData.id) return;
  const car = meshFactory.car();
  globalVar.activePlayers.push({
    car: car,
    username: player.username,
    hp: 100,
    id: player.id,
  });
  scene.add(car);
};
