import * as THREE from "three";

// CAR
const bodyGeometry = new THREE.BoxGeometry(2, 2, 4);
const material = new THREE.MeshBasicMaterial({ color: 0x0ff0b0 });

export const boxx = new THREE.Mesh(bodyGeometry, material);
