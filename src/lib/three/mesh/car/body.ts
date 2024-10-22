import * as THREE from "three";
import { verticalPole } from "./verticalPole";
// CAR
const bodyGeometry = new THREE.BoxGeometry(2, .5, 4);
const material = new THREE.MeshBasicMaterial({color: 0x0ff0b0});

export const body = new THREE.Mesh(bodyGeometry, material);
body.add(verticalPole)
body.name = "body"