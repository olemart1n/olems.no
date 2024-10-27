import * as THREE from 'three'


const bullet = () => {
    const bulletGeometry = new THREE.CapsuleGeometry(0.1,1, 32, 32);
    const bulletMaterial = new THREE.MeshBasicMaterial({ color: 0xfffff0 });
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    
    return bullet;
};


const meshFactory = {bullet}

export default meshFactory