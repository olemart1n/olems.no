import type * as THREE from "three";
export interface ActivePlayers {
  car: THREE.Group;
  username: string;
}

export const activePlayers: ActivePlayers[] = [];
