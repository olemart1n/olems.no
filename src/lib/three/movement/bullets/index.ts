import { firedBullets} from "../../state";
import { scene } from "../../scene";
import { mesh } from "../../mesh";
import * as THREE from 'three'


// Velocity or speed of the bullet
const bulletSpeed = 0.3;

export function moveBullets() {
    firedBullets.forEach((data) => {
        data.bullet.position.add(data.direction.clone().multiplyScalar(bulletSpeed));
        const interects = data.raycaster.intersectObjects(scene.children)
        // if(interects.length > 0 && (interects[0].distance < 3)) {
        //     console.log("HEI")
        //     data.bullet.rotateX(.3)
        // }
    })
}
