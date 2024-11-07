import * as THREE from "three";
import { gunAxle } from "~/game/three/mesh/car";
import { firedBullets } from "../../game-global";
import { scene } from "~/game/three/scene";
import meshFactory from "~/game/three/mesh-factory";
import { bulletSpeed } from "../../game-global";
import { explode } from "./explode";
import { gunCoolDown } from "./gun-cool-down";
export const shoot = (e: PointerEvent) => {
  e.preventDefault();

  const bullet = meshFactory.bullet();
  const position = new THREE.Vector3();
  gunAxle.getWorldPosition(position);

  bullet.position.copy(position);

  const direction = new THREE.Vector3();
  gunAxle.getWorldDirection(direction);

  // RAY
  const raycaster = new THREE.Raycaster(position, direction);
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    const distance = intersects[0].distance;

    setTimeout(
      () => {
        const index = firedBullets.findIndex((b) => b.bullet === bullet);
        if (index !== -1) {
          const bullet = firedBullets[index];
          bullet.hasHitted = true;
          // Explode the bullet
          explode(bullet);
        }
      },
      calculateBulletHitTime(distance) * 600,
    );
  }
  // Calculate the rotation quaternion based on the direction vector
  const rotation = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction,
  );
  bullet.applyQuaternion(rotation);
  gunCoolDown();
  firedBullets.push({ bullet, direction, hasHitted: false });
  scene.add(bullet);
};

function calculateBulletHitTime(distanceToObject: number) {
  const time = distanceToObject / bulletSpeed;
  const timeInSeconds = time * (1 / 60);
  return timeInSeconds;
}
