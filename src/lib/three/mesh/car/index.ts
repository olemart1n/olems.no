import * as THREE from "three";
import { wheels } from "./wheels";
import { pole1, pole2 } from "./pole";
import { body } from "./body";
import { gun } from "./gun";
import { gunAxle } from "./gunAxle";
const car = new THREE.Group()


// Add wheels to the scene or to the car object
for (const property in wheels) {
    // @ts-ignore
    car.add(wheels[property]);
}

car.add(pole1);
car.add(pole2);
car.add(body)

export { car,  wheels, body, gun, gunAxle};