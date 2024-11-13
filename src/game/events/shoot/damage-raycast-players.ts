import {
  activePlayers,
  type FiredBullet,
  hpDamageData,
} from "~/game/game-global";
import * as THREE from "three";
import { sendHpDamageData } from "~/game/socket/send-hp-damage-data";
export const damageRaycastPlayers = (data: FiredBullet, conn: WebSocket) => {
  const raycaster = new THREE.Raycaster();

  activePlayers.forEach((player) => {
    const carBody = player.car.children[4];

    const bodyPosition = new THREE.Vector3();
    carBody.getWorldPosition(bodyPosition);
    const direction = data.bullet.position
      .clone()
      .sub(bodyPosition)
      .normalize();
    raycaster.set(bodyPosition, direction);

    const intersects = raycaster.intersectObject(data.bullet);
    if (intersects.length === 0) return;
    hpDamageData.receiverId = player.id;
    hpDamageData.shooter = data.shooter;
    if (intersects[0].distance < 2) {
      hpDamageData.damage = 30;
    } else if (intersects[0].distance < 5) {
      hpDamageData.damage = 5;
    }
    sendHpDamageData(conn);
  });
};
