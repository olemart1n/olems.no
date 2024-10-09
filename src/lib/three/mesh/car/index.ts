import * as THREE from "three";
import { wheel } from "./wheel";
// CAR
const boxGeometry = new THREE.BoxGeometry(2, 0.5, 4);
const material = new THREE.MeshBasicMaterial({ color: 0xCCCCC9 });

const car = new THREE.Mesh(boxGeometry, material);

const { frontLeft, frontRight, rearLeft, rearRight } = wheel;
// Position the wheels at the corners of the car
frontLeft.position.set(-1.3, 0, -1.8);
frontRight.position.set(1.3, 0, -1.8);
rearLeft.position.set(-1.3, 0, 1.8);
rearRight.position.set(1.3, 0, 1.8);

// Add wheels to the scene or to the car object
for (const property in wheel) {
    // @ts-ignore
  car.add(wheel[property]);
}

// POLE
const poleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2.4, 10);
const poleMaterial = new THREE.MeshStandardMaterial({ color: 0xbababa });
const pole1 = new THREE.Mesh(poleGeometry, poleMaterial);
const pole2 = pole1.clone();

pole1.rotation.z = Math.PI / 2;
pole2.rotation.z = Math.PI / 2;
pole1.position.set(0, 0, 1.8);
pole2.position.set(0, 0, -1.8);

car.add(pole1);
car.add(pole2);

export { car, wheel };
