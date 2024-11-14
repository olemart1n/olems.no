import { type HpDamageData, activePlayers, carData } from "~/game/game-global";
import { type GameContextStore } from "~/game/game-context";
import { mesh, scene } from "~/game/three";
export const setHpDamageData = (data: HpDamageData, c: GameContextStore) => {
  if (data.vitcimId === carData.id) {
    handleCarHp(data, c);
    return;
  }

  const victim = activePlayers.find((player) => player.id === data.vitcimId);
  if (!victim) return;
  victim.hp -= data.damage;

  if (victim.hp <= 0) {
    const index = activePlayers.findIndex(
      (player) => player.id === data.vitcimId,
    );
    activePlayers.splice(index, 1);

    c.isNotification.value = true;
    c.notificationMesssage = `${victim.username} ble drept av ${data.shooter}`;
    setTimeout(() => {
      c.isNotification.value = false;
    }, 2000);
    return;
  }

  c.isNotification.value = true;
  c.notificationMesssage = `${victim.username} ble truffet av ${data.shooter}`;
  setTimeout(() => {
    c.isNotification.value = false;
  }, 2000);
};

function handleCarHp(data: HpDamageData, c: GameContextStore) {
  c.hpPercent -= data.damage;
  if (c.hpPercent <= 0) {
    const index = activePlayers.findIndex((player) => player.id === carData.id);
    activePlayers.splice(index, 1);
    c.hpPercent = 0;
    c.isNotification.value = true;
    c.notificationMesssage = `Du ble drept av ${data.shooter}`;
    scene.remove(mesh.car);
    document.exitPointerLock();
    c.isMenu.value = true;
    setTimeout(() => {
      c.isNotification.value = false;
    }, 2000);
    return;
  }

  c.isNotification.value = true;
  c.notificationMesssage = `Du ble truffet av ${data.shooter}`;
  setTimeout(() => {
    c.isNotification.value = false;
  }, 2000);
}
