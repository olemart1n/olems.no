import * as THREE from "three";
import { wheels } from "./wheel";
import { pole1, pole2 } from "./pole";
import { gun } from "./gun";
import { body } from "./body";
const car = new THREE.Group()


// Add wheels to the scene or to the car object
for (const property in wheels) {
    // @ts-ignore
    car.add(wheels[property]);
}

car.add(pole1);
car.add(pole2);
car.add(body)
// focalPoint.add(gun)

export { car,  wheels, body};