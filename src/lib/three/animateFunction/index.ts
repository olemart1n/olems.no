import * as THREE from 'three'
import { moveCar } from '../movement/car';
import { moveBullets } from '../movement/bullets';
import {mesh} from '../mesh'
import { cameraData } from '../state';


export const animateFunction = (camera: THREE.PerspectiveCamera) => {
    moveCar();
    moveBullets()



      // Calculate the camera's new position in spherical coordinates
    const x = cameraData.radius * Math.sin(cameraData.phi) * Math.cos(cameraData.theta);
    const y = cameraData.radius * Math.cos(cameraData.phi);
    const z = cameraData.radius * Math.sin(cameraData.phi) * Math.sin(cameraData.theta);
    const carPosOffset = new THREE.Vector3(-x, y, z);
    // -----NOT IN USE----- const carPosOffset = new THREE.Vector3(0, 3.5, 9);

    const cameraOffset = carPosOffset.applyMatrix4(mesh.car.matrixWorld);
    camera.position.copy(cameraOffset);
    camera.lookAt(mesh.car.position);
};
