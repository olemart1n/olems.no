import * as THREE from "three";
import { wheels } from "./wheel";
import { pole1, pole2 } from "./pole";
// CAR
const boxGeometry = new THREE.BoxGeometry(2, 0.5, 4);
const material = new THREE.MeshBasicMaterial({ color: 0xCCCCC9 });

const car = new THREE.Mesh(boxGeometry, material);


// Add wheels to the scene or to the car object
for (const property in wheels) {
    // @ts-ignore
  car.add(wheels[property]);
}

car.add(pole1);
car.add(pole2);

export { car, wheels};