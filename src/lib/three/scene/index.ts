import * as THREE from 'three'
import {mesh} from "../mesh"
import { light } from '../light'

export const scene = new THREE.Scene()

scene.add(mesh.landscape)
scene.add(mesh.car)
scene.add(light())
scene.add(mesh.stars)
// scene.fog = new THREE.Fog( 0x000, 1, 200)