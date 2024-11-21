import { globalVar } from "~/game/global-var";
import type { GameContextStore } from "~/game/game-context";
import type * as type from "~/game/global-var/type";
import { scene } from "~/game/three";
import { mesh } from "~/game/three";
export const playerDied = (
  player: type.BroadcastedPlayer,
  game: GameContextStore,
) => {
  if (player.id === globalVar.carData.id) {
    game.hpPercent = 0;
    game.isNotification.value = true;
    game.isInGame = false;
    game.notificationMesssage = `Du ble drept av ${player.id}`;
    scene.remove(mesh.car);
    document.exitPointerLock();
    game.isMenu.value = true;
    setTimeout(() => {
      game.isNotification.value = false;
    }, 2000);
    return;
  }
  const index = globalVar.activePlayers.findIndex(
    (player) => player.id === player.id,
  );
  const deadPlayer = globalVar.activePlayers.find(
    (player) => player.id === player.id,
  );

  deadPlayer?.car && scene.remove(deadPlayer.car);
  globalVar.activePlayers.splice(index, 1);

  game.notificationMesssage = player.username + " ble drept";
  game.isNotification.value = true;
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
};
