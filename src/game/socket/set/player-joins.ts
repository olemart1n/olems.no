import meshFactory from "~/game/three/mesh-factory";
import { globalVar } from "~/game/global-var";
import type * as type from "~/game/global-var/type";
import type { GameContextStore } from "~/game/game-context";
import { scene } from "~/game/three";
import { mesh } from "~/game/three";
import { activePlayersAddPlayer } from "../utils";
/**
 *
 * @comment all players go into activePlayers array.
 */
export const playerJoins = (player: type.Player, game: GameContextStore) => {
  game.notificationMesssage = player.username + " ble med i spillet";
  game.isNotification.value = true;
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);

  if (player.id === globalVar.carData.id) {
    activePlayersAddPlayer(mesh.car, player.username, player.id);
  } else {
    const car = meshFactory.car();
    activePlayersAddPlayer(car, player.username, player.id);
    scene.add(car);
  }
};
