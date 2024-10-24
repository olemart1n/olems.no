import * as THREE from "three";
import { mesh } from "./mesh";
import { type Signal } from "@builder.io/qwik";
import { carData } from "./state";
import { scene } from "./scene";
import { animateFunction } from "./animateFunction";
import { controls } from "./controls";
import { gameMouseEvent, gamePointerEvent } from "./utils";

const three = (mainEl: Signal<HTMLElement | undefined>) => {


  controls() // ADD EVENT LISTENERS FOR ARROW KEYS
  mainEl.value?.addEventListener("mousemove", gameMouseEvent)
  mainEl.value?.addEventListener("pointerdown", gamePointerEvent)
  
  const camera = new THREE.PerspectiveCamera( // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - CAMERA
    75, 
    mainEl.value!.clientWidth /
    mainEl.value!.clientHeight,
    .1,
    1000)


  
  const renderer = new THREE.WebGLRenderer(); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - RENDERER - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  renderer.setSize(mainEl.value!.clientWidth, mainEl.value!.clientHeight);
  renderer.setPixelRatio(devicePixelRatio);


  mainEl.value?.appendChild(renderer.domElement); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - APPEND RENDERER

  renderer.setAnimationLoop(() => { //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ANIMATION LOOP
    animateFunction(camera);
    
    renderer.render(scene, camera);
  });
};

export {mesh, three, carData}