import type * as THREE from "three";

interface BulletTargetProps {
  boundingSphere: THREE.Sphere;
}

export const bulletTargets: BulletTargetProps[] = [];
