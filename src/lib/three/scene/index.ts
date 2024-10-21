import * as THREE from 'three'
import {mesh} from "../mesh"
import { light } from '../light'

export const scene = new THREE.Scene()

scene.add(mesh.landscape)
scene.add(mesh.car)
scene.add(light())
scene.add(mesh.stars)


// Add wheels to the scene or to the car object
for (const property in mesh.textMesh) {
    // @ts-ignore
    scene.add(mesh.textMesh[property])
    
}

scene.fog = new THREE.Fog( 0x000, 1, 200)