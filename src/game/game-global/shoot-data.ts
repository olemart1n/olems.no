import * as THREE from "three";

export interface ShootData {
  bulletRotation: THREE.Quaternion;
  bulletPosition: THREE.Vector3;
  bulletDirection: THREE.Vector3;
  timeUntilHit: number;
  shooter: string;
}

export const shootData: ShootData = {
  bulletRotation: new THREE.Quaternion(),
  bulletPosition: new THREE.Vector3(),
  bulletDirection: new THREE.Vector3(),
  timeUntilHit: 0,
  shooter: "",
};
