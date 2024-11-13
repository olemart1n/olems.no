import * as THREE from "three";

const carPositionVector = new THREE.Vector3();
const carDirectionVector = new THREE.Vector3();

const poleFrontQuaternion = new THREE.Quaternion();
const poleBackQuaternion = new THREE.Quaternion();
const gunAxleWorldDirectionVector = new THREE.Vector3();
const gunAxleRotationQuaternion = new THREE.Quaternion();
const wheelFrontLeftPosition = new THREE.Vector3();
const wheelFrontRightPosition = new THREE.Vector3();
const wheelRearLeftPosition = new THREE.Vector3();
const wheelRearRightPosition = new THREE.Vector3();
export const carData: CarDataProps = {
  carPositionVector,
  carDirectionVector,
  gunAxleRotationQuaternion,
  poleFrontQuaternion,
  poleBackQuaternion,
  username: "",
  wheelsPos: {
    frontLeft: wheelFrontLeftPosition,
    frontRight: wheelFrontRightPosition,
    rearLeft: wheelRearLeftPosition,
    rearRight: wheelRearRightPosition,
  },
  frontMidPoint: { x: 0, y: 0, z: 0 },
  rearMidPoint: { x: 0, y: 0, z: 0 },
  gunAxleWorldDirectionVector,
  id: "",
};

export interface CarDataProps {
  carPositionVector: THREE.Vector3;
  carDirectionVector: THREE.Vector3;
  poleFrontQuaternion: THREE.Quaternion;
  poleBackQuaternion: THREE.Quaternion;
  username: string;
  wheelsPos: WheelPosition;
  frontMidPoint: threeD;
  rearMidPoint: threeD;
  gunAxleWorldDirectionVector: THREE.Vector3;
  gunAxleRotationQuaternion: THREE.Quaternion;
  id: string;
}

interface threeD {
  x: number;
  y: number;
  z: number;
}

export interface WheelPosition {
  frontLeft: THREE.Vector3;
  frontRight: THREE.Vector3;
  rearLeft: THREE.Vector3;
  rearRight: THREE.Vector3;
}
