import * as THREE from "three";
export type CarVariables = {
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
export const carVariables: CarVariables = {
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
  radius: 8, // Fixed distance from car
  theta: Math.PI / 2, // Horizontal rotation angle
  phi: Math.PI / 3, // Vertical rotation angle (starting point)
};

interface FiredBulletsData {
  bullet: THREE.Mesh;
  direction: THREE.Vector3;
}
export const firedBullets: FiredBulletsData[] = [];

interface ActivePlayersData {
  car: THREE.Group;
  username: string;
}
export const activePlayers: ActivePlayersData[] = [];

const carPositionVector = new THREE.Vector3();
const carDirectionVector = new THREE.Vector3();
const gunAxleDirectionVector = new THREE.Vector3();
const poleFrontQuaternion = new THREE.Quaternion();
const poleBackQuaternion = new THREE.Quaternion();
export const carData: CarDataProps = {
  carPositionVector,
  carDirectionVector,
  gunAxleDirectionVector,
  poleFrontQuaternion,
  poleBackQuaternion,
  username: "",
  wheelsY: {
    frontLeft: 0,
    frontRight: 0,
    rearLeft: 0,
    rearRight: 0,
  },
};

export interface CarDataProps {
  carPositionVector: THREE.Vector3;
  carDirectionVector: THREE.Vector3;
  gunAxleDirectionVector: THREE.Vector3;
  poleFrontQuaternion: THREE.Quaternion;
  poleBackQuaternion: THREE.Quaternion;
  username: string;
  wheelsY: WheelsY;
}

export interface WheelsY {
  frontLeft: number;
  frontRight: number;
  rearLeft: number;
  rearRight: number;
}
