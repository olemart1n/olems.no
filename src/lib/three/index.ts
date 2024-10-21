import * as THREE from "three";
import { mesh } from "./mesh";
import { type Signal } from "@builder.io/qwik";
import { carData } from "./state";
import { scene } from "./scene";
import { animateFunction } from "./animateFunction";
import { controls } from "./controls";
import { addMousemoveEvent } from "./utils";

const three = (mainEl: Signal<HTMLElement | undefined>) => {


  controls() // ADD EVENT LISTENERS FOR ARROW KEYS
  addMousemoveEvent(mainEl) // ADD EVENT LISTENERS MOUSE (TO ADJUST CAMERA)
  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    75, 
    mainEl.value!.clientWidth /
    mainEl.value!.clientHeight,
    .1,
    1000)
  // RENDERER - - - - - - - - - - - - - - - - -
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(mainEl.value!.clientWidth, mainEl.value!.clientHeight);
  renderer.setPixelRatio(devicePixelRatio);


  mainEl.value?.appendChild(renderer.domElement);

  renderer.setAnimationLoop(() => {
    animateFunction(camera);
    
    renderer.render(scene, camera);
  });
};

export {mesh, three, carData}