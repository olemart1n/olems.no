import type * as THREE from "three";
export interface FiredBulletsData {
  bullet: THREE.Mesh;
  direction: THREE.Vector3;
  hasHitted: boolean;
}
export const firedBullets: FiredBulletsData[] = [];
