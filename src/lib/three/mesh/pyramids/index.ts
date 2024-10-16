import * as THREE from 'three'
import {m, l, xl} from './vertices'
  
const positions = new Float32Array(xl);

const positionAttribute = new THREE.BufferAttribute(positions, 3);
const geometry = new THREE.BufferGeometry();

geometry.setAttribute('position', positionAttribute);


const material = new THREE.MeshStandardMaterial({ metalness: .2, roughness: 0,   emissive: 0xfff000, emissiveIntensity: 0.2,  side: THREE.DoubleSide}); // Green color
material.flatShading = true
const pyramid = new THREE.Mesh(geometry, material);



export {pyramid}