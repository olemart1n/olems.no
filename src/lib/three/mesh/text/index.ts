import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontData, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import brighter from "./fonts/Brighter_Regular.json"
const loader = new FontLoader();

export function generateText (landscape: THREE.Mesh, fontData: any) {
    const f = loader.parse(fontData)
    
        const geometry = new TextGeometry("three.js", {
            font: f,
            size: 7,
            depth: 1,
            curveSegments: 20,
            bevelSize: 1,
            bevelOffset: 0,
        });
    
        const material = new THREE.MeshBasicMaterial({ color: 0x3f3f3f });
        const textMesh = new THREE.Mesh(geometry, material);
        textMesh.castShadow = true
        // textMesh.rotateZ(-Math.PI/2)
        textMesh.rotateX(Math.PI/2 - .3)
        textMesh.position.set(-50,50,3)
        landscape.add(textMesh);
}
