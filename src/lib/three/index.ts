import * as THREE from "three";

import { camera } from "./camera";
import { mesh } from "./mesh";
import { light } from "./light";
import { type Signal } from "@builder.io/qwik";
import { controls } from "./controls";
import { carData } from "./state";
import { moveCar } from "./movement/moveCar";

const animate = (camera: THREE.PerspectiveCamera) => {
  controls(carData.direction);
  moveCar(carData);
  //   updateCarHeight(mesh.car, mesh.landscape);
  // Offset the camera so it stays behind and above the car (like a third-person view)
  const carPosOffset = new THREE.Vector3(0, 3, 7); // 2 units above and 5 units behind
  const cameraOffset = carPosOffset.applyMatrix4(mesh.car.matrixWorld); // Calculate world position

  // Set the camera position to follow the car
  camera.position.copy(cameraOffset);

  camera.lookAt(mesh.car.position);
};
const three = (mainEl: Signal<HTMLElement | undefined>) => {
  // SCENE
  const scene = new THREE.Scene();
  // CAMERA
  const c = camera(mainEl);
  // RENDERER - - - - - - - - - - - - - - - - -
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(mainEl.value!.clientWidth, mainEl.value!.clientHeight);
  renderer.setPixelRatio(devicePixelRatio);

  // ADD TO SCENE
  scene.add(mesh.landscape);
  scene.add(mesh.car);
  scene.add(mesh.gridHelper);
  scene.add(light());
  //ADD THE CANVAS TO MAIN
  mainEl.value?.appendChild(renderer.domElement);
  //REQUEST ANIMATION FRAME
  renderer.setAnimationLoop(() => {
    animate(c);
    renderer.render(scene, c);
  });
};

export {mesh, three}