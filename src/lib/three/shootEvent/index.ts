import * as THREE from 'three'
import { gun } from '../mesh/car/gun';
import { firedBullets } from '../state';
// 3. Update bullet position each frame
export const shootBullet = (scene: THREE.Scene) => {

    const bullet = createBullet();
    
    const direction = getGunDirection(gun);
    firedBullets.push({bullet, direction})
    scene.add(bullet)
};



// 1. Create a bullet
export const createBullet = () => {
    const bulletGeometry = new THREE.SphereGeometry(0.1, 32, 32); // A small sphere representing the bullet
    const bulletMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red bullet
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    // Position the bullet at the gun's current position
    bullet.position.copy(getMeshPosition(gun));  // Copy gun's position
    return bullet;
};


const getGunDirection = (gun: THREE.Mesh) => {
    const direction = new THREE.Vector3();
    gun.getWorldDirection(direction);

    // Compensate for the gun's rotation
    direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    return direction.normalize();
};





// 2. Get the direction the gun is facing
export const getMeshDirection = (mesh: THREE.Mesh) => {
    const direction = new THREE.Vector3();  // Vector to store the direction
    mesh.getWorldDirection(direction);
    return direction;
};
// 2. Get the direction the gun is facing
export const getMeshPosition = (mesh: THREE.Mesh) => {
    const position = new THREE.Vector3();  // Vector to store the direction
    mesh.getWorldPosition(position);
    return position;
};