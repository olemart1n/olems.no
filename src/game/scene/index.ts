import * as THREE from "three";
import { mesh } from "../three/mesh";
import { light } from "../three/light";

export const scene = new THREE.Scene();

scene.add(mesh.landscape);
scene.add(mesh.car);
scene.add(light());
scene.add(mesh.sky);
scene.add(mesh.stars);
scene.add(mesh.planet);

scene.fog = new THREE.Fog(0x000, 1, 200);
