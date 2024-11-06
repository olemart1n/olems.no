import type { ActivePlayersData, CarDataProps } from "~/game/game-global";
import * as THREE from "three";

export const setPlayerGunAxle = (
  player: ActivePlayersData,
  payload: CarDataProps,
) => {
  // SET THE gunAxles ROTATION
  payload.gunAxleWorldDirectionVector.y *= -1;
  const gunAxle = player!.car.getObjectByName("gun-axle");
  const directionQuaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, -1),
    payload.gunAxleWorldDirectionVector,
  );

  // Apply an additional 180-degree rotation around the X-axis
  const correctionQuaternion = new THREE.Quaternion();
  correctionQuaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI);

  // Multiply the two quaternions to apply both rotations
  directionQuaternion.multiply(correctionQuaternion);

  gunAxle?.setRotationFromQuaternion(directionQuaternion);
  gunAxle?.rotateX(Math.PI);
};
