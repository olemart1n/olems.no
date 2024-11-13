import type * as THREE from "three";
export interface FiredBullet {
  bullet: THREE.Mesh;
  direction: THREE.Vector3;
  hasHitted: boolean;
  shooter: string;
}
export const firedBullets: FiredBullet[] = [];
