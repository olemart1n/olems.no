import * as THREE from 'three'
import {mesh} from '../mesh'
import { wheels } from '../mesh/car';
export const carRaycaster = () => {
    
    const raycaster = new THREE.Raycaster()
    const downDirection = new THREE.Vector3(0,-1,0)
    const rayOrigin = new THREE.Vector3(
        mesh.car.position.x,
        mesh.car.position.y +1,
        mesh.car.position.z
    );

    raycaster.set(rayOrigin, downDirection)
    const intersects = raycaster.intersectObject(mesh.landscape)  

    const terrainNormal = intersects[0].face?.normal;
    terrainNormal && mesh.car.up.copy(terrainNormal)
    mesh.car.position.y = intersects[0].point.y + .4

}