import * as THREE from 'three'

export const carRaycaster = (car: THREE.Mesh, landscape: THREE.Mesh) => {
    const raycaster = new THREE.Raycaster()
    const downDirection = new THREE.Vector3(0,-1,0)
    const rayOrigin = new THREE.Vector3(
        car.position.x,
        car.position.y +1,
        car.position.z
    );

    raycaster.set(rayOrigin, downDirection)
    const intersects = raycaster.intersectObject(landscape)  

    const terrainNormal = intersects[0].face?.normal;
    terrainNormal && car.up.copy(terrainNormal)
    car.position.y = intersects[0].point.y + .4

    
    if (terrainNormal) {
        car.up.lerp(terrainNormal, .9);
    }
}