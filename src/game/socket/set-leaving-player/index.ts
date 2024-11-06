import { activePlayers } from "~/game/game-global";
import type { GameContextStore } from "~/game/game-context";
import { scene } from "~/game/three";
export const setLeavingPlayer = (username: string, game: GameContextStore) => {
  const index = activePlayers.findIndex(
    (player) => player.username === username,
  );
  const player = activePlayers.find((player) => player.username === username);

  player?.car && scene.remove(player.car);
  activePlayers.splice(index, 1);

  game.notificationMesssage = username + " forlot spillet";
  game.isNotification.value = true;
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
};
