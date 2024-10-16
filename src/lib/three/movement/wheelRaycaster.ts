import * as THREE from 'three'
import {mesh} from '../mesh'


export const wheelRaycaster = (wheel: THREE.Mesh) => {
    const raycaster = new THREE.Raycaster()
    const worldPosition = wheel.getWorldPosition(new THREE.Vector3())
    const downDirection = new THREE.Vector3(0,-1,0)

    const rayOrigin = new THREE.Vector3(
        worldPosition.x,
        worldPosition.y +3,
        worldPosition.z
    );
    raycaster.set(rayOrigin, downDirection)

    const intersects = raycaster.intersectObject(mesh.landscape, true)  
    if(!intersects[0]) return

    wheel.position.y = intersects[0].point.y
}
