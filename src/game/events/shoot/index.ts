import * as THREE from "three";
import { gunAxle } from "~/game/three/mesh/car";
import { firedBullets } from "../../game-global";
import { scene } from "~/game/scene";
import meshFactory from "~/game/three/mesh-factory";
import { bulletSpeed } from "../../game-global";
import { explode } from "./explode";
import { gunCoolDown } from "./gun-cool-down";
import { gunState } from "../../game-global";
import { sendShootData } from "~/game/socket/send-shoot-data";
import { shootData, carData } from "../../game-global";
import type { GameContextStore } from "~/game/game-context";
export const shoot = (
  e: PointerEvent,
  conn: WebSocket,
  game: GameContextStore,
) => {
  e.preventDefault();
  if (gunState.isCooling) return;

  const bullet = meshFactory.bullet();
  gunAxle.getWorldPosition(shootData.bulletPosition);
  bullet.position.copy(shootData.bulletPosition);
  gunAxle.getWorldDirection(shootData.bulletDirection);
  shootData.shooter = carData.username;
  // RAY
  const raycaster = new THREE.Raycaster(
    shootData.bulletPosition,
    shootData.bulletDirection,
  );
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const distance = intersects[0].distance;
    shootData.timeUntilHit = calculateBulletHitTime(distance) * 600;
    setTimeout(
      () => {
        const index = firedBullets.findIndex((b) => b.bullet === bullet);
        if (index !== -1) {
          const bullet = firedBullets[index];
          bullet.hasHitted = true;
          // Explode the bullet
          explode(bullet, game);
        }
      },
      calculateBulletHitTime(distance) * 600,
    );
  }
  // Calculate the rotation quaternion based on the direction vector
  shootData.bulletRotation = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    shootData.bulletDirection,
  );
  bullet.applyQuaternion(shootData.bulletRotation);
  // Send shoot data to the server
  sendShootData(conn);
  gunCoolDown();
  firedBullets.push({
    bullet,
    direction: shootData.bulletDirection,
    hasHitted: false,
    shooter: carData.username,
  });
  scene.add(bullet);
};

function calculateBulletHitTime(distanceToObject: number) {
  const time = distanceToObject / bulletSpeed;
  const timeInSeconds = time * (1 / 60);
  return timeInSeconds;
}
