import type * as THREE from "three";
export interface ActivePlayersData {
  car: THREE.Group;
  username: string;
}
export const activePlayers: ActivePlayersData[] = [];
