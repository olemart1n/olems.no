import type * as THREE from "three";
export interface Player {
  car: THREE.Group;
  username: string;
  hp: number;
  id: string;
}
