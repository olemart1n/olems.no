import type { ActivePlayersData, CarDataProps } from "~/game/game-global";
import { upVector } from "~/game/game-global";
import * as THREE from "three";
export const setPlayerCarBody = (
  player: ActivePlayersData,
  payload: CarDataProps,
) => {
  // SET THE BODY'S ROTATION AND HEIGHT
  const body = player!.car.children[4];
  body.position.y = (payload.frontMidPoint.y + payload.rearMidPoint.y) / 2;
  const direction = new THREE.Vector3(
    payload.frontMidPoint.x - payload.rearMidPoint.x,
    payload.frontMidPoint.y - payload.rearMidPoint.y,
    payload.frontMidPoint.z - payload.rearMidPoint.z,
  ).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    upVector,
    direction,
  );
  body.setRotationFromQuaternion(quaternion);
};
