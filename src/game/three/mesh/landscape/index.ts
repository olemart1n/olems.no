import * as THREE from "three";
import { pyramid } from "../pyramid";

const boxGeometry = new THREE.PlaneGeometry(300, 300, 50, 50);
const material = new THREE.MeshStandardMaterial({
  metalness: 0,
  roughness: 0,
  emissive: 0x222222,
  emissiveIntensity: 0.2,
});

export const moonSurface = new THREE.Mesh(boxGeometry, material);
moonSurface.name = "moonSurface";

// GROUP
export const landscape = new THREE.Group();

// landscape.castShadow = true;
// landscape.receiveShadow = true;
// landscape.raycast = THREE.Mesh.prototype.raycast;

pyramid.position.set(40, 50, 0);

landscape.name = "group: landscape";
landscape.rotateX(Math.PI * -0.5);
landscape.add(moonSurface);

landscape.add(pyramid);

const { array } = moonSurface.geometry.attributes.position;

// iterate over each z vertice
for (let i = 2; i < array.length; i += 3) {
  // each z. [x, y, z...]
  array[i] = array[i] + (Math.random() - 0.5);
}
