import * as THREE from "three";
import { scene, mesh } from "./three";
import { animateFunction } from "./animate-function";
import type { GameContextStore } from "./game-context";
import { globalVar } from "./global-var";
const game = (gameStore: GameContextStore) => {
  const camera = new THREE.PerspectiveCamera( // - - - CAMERA
    75,
    gameStore.mainEl.value!.clientWidth / gameStore.mainEl.value!.clientHeight,
    0.1,
    1000,
  );

  const gunAxleRaycaster = new THREE.Raycaster();
  const renderer = new THREE.WebGLRenderer(); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - RENDERER - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  renderer.setSize(
    gameStore.mainEl.value!.clientWidth,
    gameStore.mainEl.value!.clientHeight,
  );
  renderer.setPixelRatio(devicePixelRatio);

  gameStore.mainEl.value?.appendChild(renderer.domElement); //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - APPEND RENDERER

  setInterval(() => {
    console.log(globalVar.activePlayers);
  }, 6000);
  renderer.setAnimationLoop(() => {
    //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ANIMATION LOOP
    animateFunction(camera, gunAxleRaycaster);
    renderer.render(scene, camera);
  });
};

export { mesh, game };
