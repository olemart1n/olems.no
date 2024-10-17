import * as THREE from 'three'
import { moveCar } from '../movement/moveCar';
import {mesh} from '../mesh'



export const animateFunction = (camera: THREE.PerspectiveCamera) => {
    moveCar();
    
    const carPosOffset = new THREE.Vector3(0, 3.5, 9);
    const cameraOffset = carPosOffset.applyMatrix4(mesh.car.matrixWorld);
    camera.position.copy(cameraOffset);
    camera.lookAt(mesh.car.position);
  };
