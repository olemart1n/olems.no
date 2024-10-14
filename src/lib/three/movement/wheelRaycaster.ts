import * as THREE from 'three'


export const wheelRaycaster = (wheel: THREE.Mesh, landscape: THREE.Mesh) => {
    const raycaster = new THREE.Raycaster()
    const downDirection = new THREE.Vector3(0,-1,0)
    const rayOrigin = new THREE.Vector3(
        wheel.position.x,
        wheel.position.y +1,
        wheel.position.z
    );
    raycaster.set(rayOrigin, downDirection)

    const intersects = raycaster.intersectObject(landscape)  
    if(!intersects[0]) return
    
    const terrainNormal = intersects[0].face?.normal;
    terrainNormal && wheel.up.copy(terrainNormal)

    wheel.position.y =  intersects[0].point.y + .4
    // // If there's a valid terrain normal, adjust the wheel's up vector
    // if (terrainNormal) {
    //     wheel.up.lerp(terrainNormal, .3);
    // }
}
