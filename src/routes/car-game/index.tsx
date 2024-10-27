import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import { three, mesh } from "~/lib";
import { PreGameLoader, GunScope, Menu } from "~/components/game";
import * as THREE from "three";
import moonTexture from "./moonTexture.jpg";
export default component$(() => {
  const mainEl = useSignal<HTMLElement | undefined>();
  const isMenu = useSignal<boolean>(true);
  const preLoader = useSignal<HTMLDivElement | undefined>();
  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const loader = new THREE.TextureLoader();
      const texture1 = loader.load(moonTexture, () => {
        preLoader.value?.remove();
        const texture1Ratio = 3840 / 5760;

        mesh.moonSurface.material.map = texture1;
        mesh.moonSurface.material.map.repeat.x = 1 / texture1Ratio;
        mesh.moonSurface.material.map.offset.x = -(1 - texture1Ratio) / (2 * 1);
        mesh.moonSurface.material.map.needsUpdate = true;
        three(mainEl, isMenu);
      });
    }),
  );

  return (
    <main ref={mainEl} class={"relative "}>
      <Menu isMenu={isMenu} mainEl={mainEl} />
      <PreGameLoader preLoader={preLoader} />
      <GunScope />
    </main>
  );
});
