import * as THREE from "three";
import { gun } from "./gun";
// CAR
const focalPointGeometry = new THREE.CylinderGeometry(0.1, 0.1, .5 , 12);
const material = new THREE.MeshBasicMaterial({color: 0x000000});

export const verticalPole = new THREE.Mesh(focalPointGeometry, material);
verticalPole.name = "verticalPole"
verticalPole.position.set(0, .5, 0)
verticalPole.rotateY(Math.PI / 2)
verticalPole.add(gun)