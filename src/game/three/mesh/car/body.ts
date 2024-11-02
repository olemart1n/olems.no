import * as THREE from "three";
import { gunStative } from "./gun-stative";
// CAR
const bodyGeometry = new THREE.BoxGeometry(2, 0.5, 4);
const material = new THREE.MeshBasicMaterial({ color: 0x0ff0b0 });

export const body = new THREE.Mesh(bodyGeometry, material);
body.add(gunStative);
body.name = "car-body";
