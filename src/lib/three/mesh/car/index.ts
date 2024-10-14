import * as THREE from "three";
import { wheel } from "./wheel";
// CAR
const boxGeometry = new THREE.BoxGeometry(2, 0.5, 4);
const material = new THREE.MeshBasicMaterial({ color: 0xCCCCC9 });

const car = new THREE.Mesh(boxGeometry, material);


// Add wheels to the scene or to the car object
for (const property in wheel) {
    // @ts-ignore
  car.add(wheel[property]);
}

// POLE
const poleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2.6 , 10);
const poleMaterial = new THREE.MeshStandardMaterial({ color: 0xbababa });
const pole1 = new THREE.Mesh(poleGeometry, poleMaterial);
const pole2 = pole1.clone();

pole1.rotation.z = Math.PI / 2;
pole2.rotation.z = Math.PI / 2;
pole1.position.set(0, -.1, 1.8);
pole2.position.set(0, -.1, -1.8);

car.add(pole1);
car.add(pole2);

export { car, wheel};