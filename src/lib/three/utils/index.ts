import { cameraData } from "../state";
import * as THREE from 'three'
export const gameMouseEvent = (e: MouseEvent) => {
        // Map mouse movement to theta (horizontal) and phi (vertical) angles
        cameraData.theta -= e.movementX * 0.002;  // Adjust sensitivity as needed
        cameraData.phi -= e.movementY * 0.002;
    
        // Clamp phi to prevent the camera from flipping upside down
        cameraData.phi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraData.phi));
}


const getMeshPosition = (mesh: THREE.Mesh) => {
        const position = new THREE.Vector3();  // Vector to store the direction
        mesh.getWorldPosition(position);
        return position;
    };



// const arrowHelper = new THREE.ArrowHelper(
//     direction, // The direction the arrow should point
//     gunAxle.position, // The starting position of the arrow (same as gun position)
//     10, // Length of the arrow
//     0xffff00 // Color of the arrow
// );