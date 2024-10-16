
import * as THREE from 'three'
import { wheels } from "../mesh/car";
import { pole1, pole2 } from "../mesh/car/pole";



export const adjustPoles = () => {

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

    pole1.position.set(frontMidPoint.x, frontMidPoint.y, frontMidPoint.z);
    pole2.position.set(rearMidPoint.x, rearMidPoint.y, rearMidPoint.z);



    const rearPoleDirection = new THREE.Vector3();
    rearPoleDirection.subVectors(wheels.rearLeft.position, wheels.rearRight.position).normalize();
    
    const frontPoleDirection = new THREE.Vector3();
    frontPoleDirection.subVectors(wheels.frontLeft.position, wheels.frontRight.position).normalize();
    


    // Create an up vector for the pole (assuming the pole's original direction is along y-axis)
    const up = new THREE.Vector3(0, 1, 0); // y-axis as up
    
    // Create a quaternion that rotates the pole from its up vector to the calculated direction
    const quaternionFront = new THREE.Quaternion();
    quaternionFront.setFromUnitVectors(up, frontPoleDirection);

    const quaternionRear = new THREE.Quaternion();
    quaternionRear.setFromUnitVectors(up, rearPoleDirection);
    
    // Apply the quaternion rotation to the pole
    pole1.setRotationFromQuaternion(quaternionFront);
    pole2.setRotationFromQuaternion(quaternionRear)
}
