import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import brighter from "./fonts/Brighter_Regular.json"

const loader = new FontLoader();
const f = loader.parse(brighter)

const createTextMesh = (text: string, x: number, y: number, z: number) => {
    const geometry = new TextGeometry(text, {
        font: f,
        size: 7,
        depth: 1,
        curveSegments: 20,
        bevelSize: 1,
        bevelOffset: 0,
    }); 

    const material = new THREE.MeshBasicMaterial({ color: 0x3fffff, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true
    mesh.position.set(x, y, z)
    return mesh
}

export default createTextMesh