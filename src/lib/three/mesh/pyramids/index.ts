import * as THREE from 'three'

const vertices = [
    0,0,0,
    15,15,20, // T
    1,15, 0, // MID WEST
    0,0,0, // START

    15, 1, 0, // MID NORTH
    15,15,20, // T

    1,15, 0, // MID WEST
    0, 30, 0, // SOUTH WEST

    15,15,20, // T
    15, 1, 0, // MID NORTH
    30, 0, 0, // NORTH EAST

    15,15,20, // T
    0, 30, 0, // SOUTH WEST
    15, 29, 0, // MID SOUTH

    15,15,20, // T
    30, 0, 0, // NORTH EAST
    29, 15, 0, // MID EAST

    15,15,20, // T
    15, 29, 0, // MID SOUTH
    30, 30, 0, // SOUTH EAST

    15,15,20, // T
    29, 15, 0, // MID EAST
    
    
]
  
  const positions = new Float32Array(vertices);
  
  const positionAttribute = new THREE.BufferAttribute(positions, 3);
  const geometry = new THREE.BufferGeometry();
    
  geometry.setAttribute('position', positionAttribute);
  const material = new THREE.MeshStandardMaterial({ metalness: 0, roughness: 0,   emissive: 0xF1C368, emissiveIntensity: 0.1,  side: THREE.DoubleSide}); // Green color
  material.flatShading = true
  const pyramid = new THREE.Mesh(geometry, material);


export {pyramid}