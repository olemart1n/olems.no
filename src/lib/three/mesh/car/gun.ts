import * as THREE from "three";

const gunGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2 , 12);
const gunMaterial = new THREE.MeshStandardMaterial({ color: 0xbababa });
export const gun = new THREE.Mesh(gunGeometry, gunMaterial);
gun.name = "gun"
gun.rotateZ(-Math.PI / 2)
gun.position.set(.5, .1, 0)

// // Create a direction vector for the arrow
// const direction = new THREE.Vector3(0, -1, 0); // Assuming gun points along the X-axis after rotation
// direction.normalize(); // Normalize the vector

// // Create an ArrowHelper
// const arrowHelper = new THREE.ArrowHelper(
//     direction, // The direction the arrow should point
//     gun.position, // The starting position of the arrow (same as gun position)
//     5, // Length of the arrow
//     0xffff00 // Color of the arrow
// );

// // Add the arrow to the scene
// gun.add(arrowHelper);
