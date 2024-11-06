import * as THREE from "three";
import { wheels } from "~/game/three/mesh/car";
import { pole1, pole2 } from "~/game/three/mesh/car/poles";
import { carData } from "~/game/game-global";

export const adjustPoles = () => {
  pole1.position.set(
    carData.frontMidPoint.x,
    carData.frontMidPoint.y,
    carData.frontMidPoint.z,
  );
  pole2.position.set(
    carData.rearMidPoint.x,
    carData.rearMidPoint.y,
    carData.rearMidPoint.z,
  );

  const rearPoleDirection = new THREE.Vector3();
  rearPoleDirection
    .subVectors(wheels.rearLeft.position, wheels.rearRight.position)
    .normalize();

  const frontPoleDirection = new THREE.Vector3();
  frontPoleDirection
    .subVectors(wheels.frontLeft.position, wheels.frontRight.position)
    .normalize();

  // Create an up vector for the pole (assuming the pole's original direction is along y-axis)
  const up = new THREE.Vector3(0, 1, 0); // y-axis as up

  carData.poleFrontQuaternion.setFromUnitVectors(up, frontPoleDirection);
  carData.poleBackQuaternion.setFromUnitVectors(up, rearPoleDirection);

  // Apply the quaternion rotation to the pole
  pole1.setRotationFromQuaternion(carData.poleFrontQuaternion);
  pole2.setRotationFromQuaternion(carData.poleBackQuaternion);
};
