import * as THREE from "three";
// const sideMaterial = new THREE.MeshBasicMaterial({
// });
const capMaterial = new THREE.MeshStandardMaterial({
  color: 0xcccccc, // or any other color you want for the caps
});

// WHEELS
const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 32);

const frontLeft = new THREE.Mesh(wheelGeometry,capMaterial);

// STRIPES
const skinMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})
const skinGeometry = new THREE.CylinderGeometry(0.32, 0.32, 0.19, 6);
const skin = new THREE.Mesh(skinGeometry, skinMaterial)
frontLeft.add(skin)

const frontRight = frontLeft.clone();
const rearLeft = frontLeft.clone();
const rearRight = frontLeft.clone();
// Position the wheels at the corners of the car
frontLeft.position.set(-1.4, -.1, -1.8);
frontRight.position.set(1.4, -.1, -1.8);
rearLeft.position.set(-1.4, -.1, 1.8);
rearRight.position.set(1.4, -.1, 1.8);

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
