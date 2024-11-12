import type * as THREE from "three";
export interface ActivePlayers {
  car: THREE.Group;
  username: string;
  hp: number;
}

export const activePlayers: ActivePlayers[] = [];
