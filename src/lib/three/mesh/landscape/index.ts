import * as THREE from "three";
import { pyramid } from "../pyramids";
// const boxGeometry = new THREE.PlaneGeometry(1000, 1000, 30, 30);
// const material = new THREE.MeshPhongMaterial({ flatShading: true });
const boxGeometry = new THREE.PlaneGeometry(250, 250, 50, 50);
const material = new THREE.MeshStandardMaterial({ metalness: 0, roughness: 0,   emissive: 0x222222, emissiveIntensity: 0.2,  });

export const landscape = new THREE.Mesh(boxGeometry, material);
landscape.rotateX(Math.PI * -0.5);

pyramid.position.set(20,90,0)
landscape.add(pyramid)
// const { array } = landscape.geometry.attributes.position;

// // iterate over each z vertice
// for (let i = 2; i < array.length; i += 3) {
//   // each z. [x, y, z...]
//   array[i] = array[i] + (Math.random() - 0.5);
// }

// GRID
export const gridHelper = new THREE.GridHelper(1000, 500, 0x0000ff, 0x0000ff); // Blue main lines, gray divisions