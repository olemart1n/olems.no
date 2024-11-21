import { globalVar } from "~/game/global-var";
import type * as types from "~/game/global-var/type";
import { type GameContextStore } from "~/game/game-context";

export const hpDamageData = (data: types.HpDamageData, c: GameContextStore) => {
  if (data.vitcimId === globalVar.carData.id) {
    // If id is the id of this clients id, do differently
    c.hpPercent -= data.damage;

    c.isNotification.value = true;
    c.notificationMesssage = `Du ble truffet av ${data.shooterId}`;
    setTimeout(() => {
      c.isNotification.value = false;
    }, 2000);
    return;
  }

  const victim = globalVar.activePlayers.find(
    (player) => player.id === data.vitcimId,
  );
  if (!victim) return;
  victim.hp -= data.damage;

  c.isNotification.value = true;
  c.notificationMesssage = `${victim.username} ble truffet av ${data.shooterId}`;
  setTimeout(() => {
    c.isNotification.value = false;
  }, 2000);
};
