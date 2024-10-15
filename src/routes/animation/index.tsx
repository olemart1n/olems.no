import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import { three, mesh, carData } from "~/lib";
import * as THREE from "three";
import moonTexture from "./moonTexture.jpg";
export default component$(() => {
  const mainEl = useSignal<HTMLElement | undefined>();

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const loader = new THREE.TextureLoader();

      const texture1 = loader.load(moonTexture);
      const texture1Ratio = 3840 / 5760;
      mesh.landscape.material.map = texture1;
      mesh.landscape.material.map.repeat.x = 1 / texture1Ratio;
      mesh.landscape.material.map.offset.x = -(1 - texture1Ratio) / (2 * 1);
      mesh.landscape.material.map.needsUpdate = true;
      three(mainEl);
    }),
  );

  return (
    <main ref={mainEl}>
      <figure class="absolute bottom-6 z-10 mt-auto flex w-full flex-col gap-1 text-center sm:hidden">
        <div class="row-span-1">
          <button
            class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
            value={"forward"}
            onTouchStart$={() => (carData.direction.forward = true)}
            onTouchEnd$={() => (carData.direction.forward = false)}
          >
            &#x2191;
          </button>
        </div>
        <div class="flex place-content-center gap-1">
          <button
            class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
            value={"forward"}
            onTouchStart$={() => (carData.direction.left = true)}
            onTouchEnd$={() => (carData.direction.left = false)}
          >
            &#x2190;
          </button>
          <button
            class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
            value={"forward"}
            onTouchStart$={() => (carData.direction.reverse = true)}
            onTouchEnd$={() => (carData.direction.reverse = false)}
          >
            &#x2193;
          </button>
          <button
            class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
            value={"forward"}
            onTouchStart$={() => (carData.direction.right = true)}
            onTouchEnd$={() => (carData.direction.right = false)}
          >
            &#x2192;
          </button>
        </div>
      </figure>
    </main>
  );
});
