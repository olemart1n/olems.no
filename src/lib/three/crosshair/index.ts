// import * as THREE from 'three'

// // Step 1: Get crosshair's NDC coordinates
// const crosshairNDC = new THREE.Vector3(0, 0.5, -1); // NDC z set to -1 (in front of the camera)

// // Step 2: Convert to world coordinates
// crosshairNDC.unproject(camera);

// // Step 3: Define a direction vector from the camera to the target
// const direction = crosshairNDC.clone().sub(camera.position).normalize();

// // Step 4: Set a target point a certain distance away from the camera
// const targetPoint = camera.position.clone().add(direction.multiplyScalar(100)); // 100 units forward
