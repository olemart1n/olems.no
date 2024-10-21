import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import { three, mesh } from "~/lib";
import { PreGameLoader } from "~/components/game";
import * as THREE from "three";
import moonTexture from "./moonTexture.jpg";
export default component$(() => {
  const mainEl = useSignal<HTMLElement | undefined>();

  const preLoader = useSignal<HTMLDivElement | undefined>();
  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const loader = new THREE.TextureLoader();
      const texture1 = loader.load(moonTexture, () => {
        preLoader.value?.remove();
        const texture1Ratio = 3840 / 5760;
        mesh.landscape.material.map = texture1;
        mesh.landscape.material.map.repeat.x = 1 / texture1Ratio;
        mesh.landscape.material.map.offset.x = -(1 - texture1Ratio) / (2 * 1);
        mesh.landscape.material.map.needsUpdate = true;
        three(mainEl);
      });
    }),
  );

  return (
    <main ref={mainEl} class="relative">
      <button class="absolute left-1 top-1 h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 font-bold text-slate-100">
        M
      </button>
      <PreGameLoader preLoader={preLoader} />
    </main>
  );
});
