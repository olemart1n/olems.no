import * as THREE from "three";
import { mesh } from "./mesh";
import { type Signal } from "@builder.io/qwik";
import { carData } from "./state";
import { scene } from "./scene";
import { animateFunction } from "./animateFunction";
import { addControls } from "./controls";

const three = (mainEl: Signal<HTMLElement | undefined>, isMenu: Signal<boolean | undefined>) => {
  const camera = new THREE.PerspectiveCamera( // - - - CAMERA
    75, 
    mainEl.value!.clientWidth /
    mainEl.value!.clientHeight,
    .1,
    1000)

  const gunAxleRaycaster = new THREE.Raycaster()
  addControls(mainEl, isMenu)

  
  const renderer = new THREE.WebGLRenderer(); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - RENDERER - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  renderer.setSize(mainEl.value!.clientWidth, mainEl.value!.clientHeight);
  renderer.setPixelRatio(devicePixelRatio);

  mainEl.value?.appendChild(renderer.domElement); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - APPEND RENDERER

  renderer.setAnimationLoop(() => { //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ANIMATION LOOP
    animateFunction(camera, gunAxleRaycaster);
    renderer.render(scene, camera);
  });
};


export {mesh, three, carData}