import { Mesh } from "three";
import * as THREE from 'three'
export type CarData = {
  speed: number;
  acceleration: number;
  friction: number;
  angle: number;
  direction: Direction;
  maxSpeed: number;
};

export interface Direction {
  left: boolean;
  right: boolean;
  reverse: boolean;
  forward: boolean;
}
export const carData: CarData = {
  speed: 0,
  acceleration: 0.02,
  friction: 0.01,
  angle: 0,
  maxSpeed: 0.2,
  direction: {
    left: false,
    right: false,
    reverse: false,
    forward: false,
  },
};


export const cameraData = {
  radius: 8,  // Fixed distance from car
  theta: Math.PI / 2,   // Horizontal rotation angle
  phi: Math.PI / 3 // Vertical rotation angle (starting point)
}

interface FiredBulletsData {
  bullet: Mesh;
  direction: THREE.Vector3
}
export const firedBullets: FiredBulletsData[] = []