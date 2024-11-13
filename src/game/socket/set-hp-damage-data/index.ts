import { type HpDamageData, activePlayers, carData } from "~/game/game-global";
import { type GameContextStore } from "~/game/game-context";
import { mesh, scene } from "~/game/three";
export const setHpDamageData = (data: HpDamageData, c: GameContextStore) => {
  console.log(data);
  console.log(activePlayers);
  console.log("This is the carData id: ", carData.id);
  console.log("This is the name of the shooter: ", data.shooter);

  const player = activePlayers.find((player) => player.id === data.receiverId);
  if (!player) return;
  console.log(player);
  player.hp -= data.damage;

  if (player.id === carData.id) {
    handleCarHp(data, c);
    return;
  }

  if (player.hp <= 0) {
    const index = activePlayers.findIndex((player) => player.id === data.id);
    activePlayers.splice(index, 1);

    c.isNotification.value = true;
    c.notificationMesssage = `${player.username} was killed by ${data.shooter}`;
    setTimeout(() => {
      c.isNotification.value = false;
    }, 2000);
    return;
  }

  c.isNotification.value = true;
  c.notificationMesssage = `${player.username} was hit by ${data.shooter}`;
  player.hp -= data.damage;
};

function handleCarHp(data: HpDamageData, c: GameContextStore) {
  c.hpPercent -= data.damage;
  if (c.hpPercent <= 0) {
    const index = activePlayers.findIndex((player) => player.id === carData.id);
    activePlayers.splice(index, 1);
    c.hpPercent = 0;
    c.isNotification.value = true;
    c.notificationMesssage = `You were killed by ${data.shooter}`;
    scene.remove(mesh.car);
    document.exitPointerLock();
    c.isMenu.value = true;
    setTimeout(() => {
      c.isNotification.value = false;
    }, 2000);
    return;
  }

  c.isNotification.value = true;
  c.notificationMesssage = `You were hit by ${data.shooter}`;
  setTimeout(() => {
    c.isNotification.value = false;
  }, 2000);
}
