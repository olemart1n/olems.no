import type { ShootData } from "~/game/game-global";
import { firedBullets } from "~/game/game-global";
import * as THREE from "three";
import meshFactory from "~/game/three/mesh-factory";
import { scene } from "~/game/three";
import { explode } from "~/game/events/shoot/explode";
export const setShootData = (payload: ShootData) => {
  const bullet = meshFactory.bullet();
  const position = new THREE.Vector3(
    payload.bulletPosition.x,
    payload.bulletPosition.y,
    payload.bulletPosition.z,
  );
  bullet.position.copy(position);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    payload.bulletDirection,
  );
  bullet.applyQuaternion(quaternion);

  // Create a new Vector3 object from payload.bulletDirection
  const direction = new THREE.Vector3(
    payload.bulletDirection.x,
    payload.bulletDirection.y,
    payload.bulletDirection.z,
  );

  setTimeout(() => {
    const index = firedBullets.findIndex((b) => b.bullet === bullet);
    if (index !== -1) {
      const bullet = firedBullets[index];
      bullet.hasHitted = true;
      // Explode the bullet
      explode(bullet);
    }
  }, payload.timeUntilHit);

  firedBullets.push({
    bullet,
    direction,
    hasHitted: false,
    shooter: payload.shooter,
  });
  scene.add(bullet);
};
