import * as THREE from 'three'

export const box = () => {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({color: 0x00ffff})
    const meshBox = new THREE.Mesh(boxGeometry, material)
    return meshBox
}