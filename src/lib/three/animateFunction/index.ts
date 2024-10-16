import * as THREE from 'three'
import { controls } from '../controls';
import { carData } from '../state';
import { wheels } from '../mesh/car';
import { moveCar } from '../movement/moveCar';
import {mesh} from '../mesh'
import { scene } from '../scene';
// const rayHelper = new THREE.ArrowHelper(new THREE.Vector3(0,-3,0),new THREE.Vector3(
//     wheels.frontRight.position.x,
//     wheels.frontRight.position.y +1,
//     wheels.frontRight.position.z
//   ), 5, 0xff0000);
  
//   scene.add(rayHelper);


export const animateFunction = (camera: THREE.PerspectiveCamera) => {
    controls();
    moveCar();
    
    const carPosOffset = new THREE.Vector3(0, 3, 7); // 2 units above and 5 units behind
    const cameraOffset = carPosOffset.applyMatrix4(mesh.car.matrixWorld); // Calculate world position
    
    camera.position.copy(cameraOffset);
    camera.lookAt(mesh.car.position);
  };
