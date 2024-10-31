import * as THREE from "three";
import { mesh } from "./mesh";
import { type Signal } from "@builder.io/qwik";
import { carVariables } from "./state";
import { scene } from "./scene";
import { animateFunction } from "./animateFunction";
import { addControls } from "./controls";
import { sendCarData } from "../game-socket";

const three = (mainEl: Signal<HTMLElement | undefined>) => {
  const camera = new THREE.PerspectiveCamera( // - - - CAMERA
    75, 
    mainEl.value!.clientWidth /
    mainEl.value!.clientHeight,
    .1,
    1000)

  const gunAxleRaycaster = new THREE.Raycaster()

  

  
  const renderer = new THREE.WebGLRenderer(); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - RENDERER - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  renderer.setSize(mainEl.value!.clientWidth, mainEl.value!.clientHeight);
  renderer.setPixelRatio(devicePixelRatio);

  mainEl.value?.appendChild(renderer.domElement); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - APPEND RENDERER

  renderer.setAnimationLoop(() => { //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ANIMATION LOOP
    animateFunction(camera, gunAxleRaycaster);
    renderer.render(scene, camera);
  });
};


export {mesh, three, carVariables}