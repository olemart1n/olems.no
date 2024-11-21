import type { GameContextStore } from "~/game/game-context";
import type * as type from "~/game/global-var/type";

export const spectatorLeaves = (
  c: GameContextStore,
  player: type.BroadcastedPlayer,
) => {
  c.notificationMesssage = "Hade " + player.username;
  c.isNotification.value = true;
  setTimeout(() => {
    c.isNotification.value = false;
  }, 2000);
};
