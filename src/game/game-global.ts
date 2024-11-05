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

const poleFrontQuaternion = new THREE.Quaternion();
const poleBackQuaternion = new THREE.Quaternion();
const gunAxleWorldDirectionVector = new THREE.Vector3();
const gunAxleRotationQuaternion = new THREE.Quaternion();
export const carData: CarDataProps = {
  carPositionVector,
  carDirectionVector,
  gunAxleRotationQuaternion,
  poleFrontQuaternion,
  poleBackQuaternion,
  username: "",
  wheelsY: {
    frontLeft: 0,
    frontRight: 0,
    rearLeft: 0,
    rearRight: 0,
  },
  frontMidPoint: { x: 0, y: 0, z: 0 },
  rearMidPoint: { x: 0, y: 0, z: 0 },
  gunAxleWorldDirectionVector,
};

export interface CarDataProps {
  carPositionVector: THREE.Vector3;
  carDirectionVector: THREE.Vector3;
  poleFrontQuaternion: THREE.Quaternion;
  poleBackQuaternion: THREE.Quaternion;
  username: string;
  wheelsY: WheelsY;
  frontMidPoint: threeD;
  rearMidPoint: threeD;
  gunAxleWorldDirectionVector: THREE.Vector3;
  gunAxleRotationQuaternion: THREE.Quaternion;
}

interface threeD {
  x: number;
  y: number;
  z: number;
}

export interface WheelsY {
  frontLeft: number;
  frontRight: number;
  rearLeft: number;
  rearRight: number;
}

// Set the mesh orientation to align with the direction vector
export const upVector = new THREE.Vector3(0, 0, -1); // Assuming 'up' vector is (0, 1, 0) for the mesh
