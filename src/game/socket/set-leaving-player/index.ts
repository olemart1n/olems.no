import { activePlayers, type Player } from "~/game/game-global";
import type { GameContextStore } from "~/game/game-context";
import { scene } from "~/game/three";
export const setLeavingPlayer = (
  leavingPlayer: Player,
  game: GameContextStore,
) => {
  const index = activePlayers.findIndex(
    (player) => player.id === leavingPlayer.id,
  );
  const player = activePlayers.find((player) => player.id === leavingPlayer.id);

  player?.car && scene.remove(player.car);
  activePlayers.splice(index, 1);

  game.notificationMesssage = leavingPlayer.username + " forlot spillet";
  game.isNotification.value = true;
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
};
