import { activePlayers, type FiredBulletsData } from "~/game/game-global";
import * as THREE from "three";
import type { GameContextStore } from "~/game/game-context";

export const damageRaycastPlayers = (
  data: FiredBulletsData,
  game: GameContextStore,
) => {
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

    if (intersects.length > 0) {
      if (intersects[0].distance > 7) return;
      game.notificationMesssage = `${player.username} got hit by ${data.shooter}`;
      game.isNotification.value = true;
      setTimeout(() => (game.isNotification.value = false), 2000);
    }
  });
};
