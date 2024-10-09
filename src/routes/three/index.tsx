import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import { three, mesh } from "~/lib";
import * as THREE from "three";
import texturee from "./texturee.png";
import moonTexture from "./moonTexture.jpg";
export default component$(() => {
  const mainEl = useSignal<HTMLElement | undefined>();

  useOnDocument(
    "DOMContentLoaded",
    $(async () => {
      const loader = new THREE.TextureLoader();
      const texture = await loader.load(texturee);
      const texture1 = await loader.load(moonTexture);
      const texture1Ratio = 3840 / 5760;

      mesh.wheel.rearLeft.material[0].map = texture;
      mesh.wheel.rearLeft.material[0].needsUpdate = true;
      mesh.landscape.material.map = texture1;
      mesh.landscape.material.map.repeat.x = 1 / texture1Ratio;
      mesh.landscape.material.map.offset.x = -(1 - texture1Ratio) / (2 * 1);
      mesh.landscape.material.map.needsUpdate = true;
      three(mainEl);
    }),
  );
  return <main ref={mainEl}></main>;
});

// useVisibleTask$(async () => {
//   const loader = new THREE.TextureLoader();
//   const texture = await loader.load(Texture);
//   console.log(texture);
//   mesh.wheel.rearLeft.material[0].map = texture;
//   mesh.wheel.rearLeft.material[0].needsUpdate = true;
// });
