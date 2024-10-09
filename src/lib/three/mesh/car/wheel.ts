import * as THREE from "three";
const sideMaterial = new THREE.MeshBasicMaterial({
});
const capMaterial = new THREE.MeshStandardMaterial({
  color: 0xcccccc, // or any other color you want for the caps
});

// WHEELS
const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 32);



const frontLeft = new THREE.Mesh(wheelGeometry,[
  sideMaterial, // for the side of the cylinder
  capMaterial, // for the top cap
  capMaterial, // for the bottom cap
]);



const frontRight = frontLeft.clone();
const rearLeft = frontLeft.clone();
const rearRight = frontLeft.clone();

export const wheel = {
  frontLeft,
  frontRight,
  rearLeft,
  rearRight,
};


for (const property in wheel) {
  // @ts-ignore
  wheel[property].rotation.z = Math.PI / 2;
}
