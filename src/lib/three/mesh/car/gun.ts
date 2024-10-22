import * as THREE from "three";

const gunGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2 , 12);
const gunMaterial = new THREE.MeshStandardMaterial({ color: 0xbababa });
export const gun = new THREE.Mesh(gunGeometry, gunMaterial);
gun.name = "gun"
gun.rotateZ(Math.PI / 2)
gun.position.set(.5, .1, 0)
