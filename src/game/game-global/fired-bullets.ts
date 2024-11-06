import type * as THREE from "three";

interface FiredBulletsData {
  bullet: THREE.Mesh;
  direction: THREE.Vector3;
  bulletBoundingSphere: THREE.Sphere;
}
export const firedBullets: FiredBulletsData[] = [];
