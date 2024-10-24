import { firedBullets} from "../../state";
import { mesh } from "../../mesh";
import * as THREE from 'three'


// Velocity or speed of the bullet
const bulletSpeed = 0.5;

export function moveBullets() {
    firedBullets.forEach((data) => {
        data.bullet.position.add(data.direction.clone().multiplyScalar(bulletSpeed));
    })
}
