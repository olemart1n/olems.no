import * as THREE from "three";
import { wheels } from "~/game/three/mesh/car";
import { body } from "~/game/three/mesh/car";
import { globalVar } from "~/game/global-var";

export const adjustBody = () => {
  globalVar.carData.frontMidPoint = {
    x: (wheels.frontLeft.position.x + wheels.frontRight.position.x) / 2,
    y: (wheels.frontLeft.position.y + wheels.frontRight.position.y) / 2,
    z: (wheels.frontLeft.position.z + wheels.frontRight.position.z) / 2,
  };

  globalVar.carData.rearMidPoint = {
    x: (wheels.rearLeft.position.x + wheels.rearRight.position.x) / 2,
    y: (wheels.rearLeft.position.y + wheels.rearRight.position.y) / 2,
    z: (wheels.rearLeft.position.z + wheels.rearRight.position.z) / 2,
  };

  // Step 2: Calculate direction vector and align the mesh
  const direction = new THREE.Vector3(
    globalVar.carData.frontMidPoint.x - globalVar.carData.rearMidPoint.x,
    globalVar.carData.frontMidPoint.y - globalVar.carData.rearMidPoint.y,
    globalVar.carData.frontMidPoint.z - globalVar.carData.rearMidPoint.z,
  ).normalize();

  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    globalVar.upVector,
    direction,
  );
  body.setRotationFromQuaternion(quaternion);
  body.position.y =
    (globalVar.carData.frontMidPoint.y + globalVar.carData.rearMidPoint.y) / 2;
};
