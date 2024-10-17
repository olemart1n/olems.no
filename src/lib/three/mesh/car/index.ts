import * as THREE from "three";
import { wheels } from "./wheel";
import { pole1, pole2 } from "./pole";
import { body } from "./body";
// CAR
const focalPointGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2.6 , 2);
const material = new THREE.MeshBasicMaterial();

const focalPoint = new THREE.Mesh(focalPointGeometry, material);


// Add wheels to the scene or to the car object
for (const property in wheels) {
    // @ts-ignore
    focalPoint.add(wheels[property]);
}

focalPoint.add(pole1);
focalPoint.add(pole2);

focalPoint.add(body)

export { focalPoint as car, wheels, body};