import * as THREE from 'three'
import { gunAxle } from '../mesh/car';
import { firedBullets } from '../state';
import { scene } from '../scene';
import meshFactory from '../mesh-factory';
export const shootEvent = ( e: PointerEvent) => {
    e.preventDefault()

    const bullet = meshFactory.bullet()

    const position = new THREE.Vector3()
    gunAxle.getWorldPosition(position);

    bullet.position.copy(position);

    const direction = new THREE.Vector3();
    gunAxle.getWorldDirection(direction)



    

    // Calculate the rotation quaternion based on the direction vector
    const rotation = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    bullet.applyQuaternion(rotation);


    firedBullets.push({bullet, direction})
    scene.add(bullet)
};
