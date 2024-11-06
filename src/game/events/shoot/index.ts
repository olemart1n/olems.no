import * as THREE from "three";
import { gunAxle } from "~/game/three/mesh/car";
import { firedBullets } from "../../game-global";
import { scene } from "~/game/three/scene";
import meshFactory from "~/game/three/mesh-factory";
export const shoot = (e: PointerEvent) => {
  e.preventDefault();

  const bullet = meshFactory.bullet();

  //SPHERE
  const bulletBoundingBox = new THREE.Box3().setFromObject(bullet);
  const bulletBoundingSphere = new THREE.Sphere();
  bulletBoundingBox.getBoundingSphere(bulletBoundingSphere);

  const position = new THREE.Vector3();
  gunAxle.getWorldPosition(position);

  bullet.position.copy(position);

  const direction = new THREE.Vector3();
  gunAxle.getWorldDirection(direction);

  // Calculate the rotation quaternion based on the direction vector
  const rotation = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction,
  );
  bullet.applyQuaternion(rotation);

  firedBullets.push({ bullet, direction, bulletBoundingSphere });
  scene.add(bullet);
};
