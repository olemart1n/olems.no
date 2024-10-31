
import * as THREE from 'three'
import { wheels } from "../../mesh/car";
import { body} from '../../mesh/car';


export const adjustBody = () => {

    const frontMidPoint = {
        x: (wheels.frontLeft.position.x + wheels.frontRight.position.x) / 2,
        y: (wheels.frontLeft.position.y + wheels.frontRight.position.y) / 2,
        z: (wheels.frontLeft.position.z + wheels.frontRight.position.z) / 2,
    };
    
    const rearMidPoint = {
        x: (wheels.rearLeft.position.x + wheels.rearRight.position.x) / 2,
        y: (wheels.rearLeft.position.y + wheels.rearRight.position.y) / 2,
        z: (wheels.rearLeft.position.z + wheels.rearRight.position.z) / 2,
    };


    // Step 2: Calculate direction vector and align the mesh
    const direction = new THREE.Vector3(
        frontMidPoint.x - rearMidPoint.x,
        frontMidPoint.y - rearMidPoint.y,
        frontMidPoint.z - rearMidPoint.z
    ).normalize();

    // Set the mesh orientation to align with the direction vector
    const up = new THREE.Vector3(0, 0, -1); // Assuming 'up' vector is (0, 1, 0) for the mesh
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction);
    body.setRotationFromQuaternion(quaternion);
    body.position.y = (frontMidPoint.y + rearMidPoint.y) / 2

}
