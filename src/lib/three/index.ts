import * as THREE from "three";
import { mesh } from "./mesh";
import { light } from "./light";
import { type Signal } from "@builder.io/qwik";
import { controls } from "./controls";
import { carData } from "./state";
import { moveCar } from "./movement/moveCar";

const animate = (camera: THREE.PerspectiveCamera) => {
  controls(carData.direction);
  moveCar(carData);
  // Offset the camera so it stays behind and above the car (like a third-person view)
  const carPosOffset = new THREE.Vector3(0, 3, 7); // 2 units above and 5 units behind
  const cameraOffset = carPosOffset.applyMatrix4(mesh.car.matrixWorld); // Calculate world position
  // Set the camera position to follow the car
  camera.position.copy(cameraOffset);
  camera.lookAt(mesh.car.position);
};
// SCENE
export const scene = new THREE.Scene();

const three = (mainEl: Signal<HTMLElement | undefined>) => {
  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    75, 
    mainEl.value!.clientWidth /
    mainEl.value!.clientHeight,
    .1,
    250)


  // RENDERER - - - - - - - - - - - - - - - - -
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(mainEl.value!.clientWidth, mainEl.value!.clientHeight);
  renderer.setPixelRatio(devicePixelRatio);

  // ADD TO SCENE
  scene.add(mesh.landscape);
  scene.add(mesh.car);
  // const axesHelper = new THREE.AxesHelper( 5 );
  
  scene.add(light());

  //ADD THE CANVAS TO MAIN
  mainEl.value?.appendChild(renderer.domElement);

  //REQUEST ANIMATION FRAME
  renderer.setAnimationLoop(() => {
    animate(camera);
    renderer.render(scene, camera);
  });
};

export {mesh, three, carData}