import meshFactory from "~/game/three/mesh-factory";
import { activePlayers, type Player } from "~/game/game-global";
import type { GameContextStore } from "~/game/game-context";
import { scene } from "~/game/three";
export const setNewPlayer = (player: Player, game: GameContextStore) => {
  const car = meshFactory.car();
  activePlayers.push({
    car: car,
    username: player.username,
    hp: 100,
    id: player.id,
  });
  scene.add(car);
  game.notificationMesssage = player.username + " ble med";
  game.isNotification.value = true;
  //
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
};
