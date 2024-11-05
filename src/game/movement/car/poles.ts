import * as THREE from "three";
import { wheels } from "~/game/three/mesh/car";
import { pole1, pole2 } from "~/game/three/mesh/car/poles";
import { carData } from "~/game/game-global";

export const adjustPoles = () => {
  const frontMidPoint = {
    x: (wheels.frontLeft.position.x + wheels.frontRight.position.x) / 2,
    y: (wheels.frontLeft.position.y + wheels.frontRight.position.y) / 2,
    z: (wheels.frontLeft.position.z + wheels.frontRight.position.z) / 2,
  };

  const rearMidPoint = {
    x: (wheels.rearLeft.position.x + wheels.rearRight.position.x) / 2,
    y: (wheels.rearLeft.position.y + wheels.rearRight.position.y) / 2,
    z: (wheels.rearLeft.position.z + wheels.rearRight.position.z) / 2,
  };

  pole1.position.set(frontMidPoint.x, frontMidPoint.y, frontMidPoint.z);
  pole2.position.set(rearMidPoint.x, rearMidPoint.y, rearMidPoint.z);

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
