import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import { three, mesh } from "~/lib";
import { PreGameLoader, GunScope, Menu } from "~/components/game";
import { gameMouseEvent } from "~/lib/three/utils";
import * as THREE from "three";
import moonTexture from "./moonTexture.jpg";
export default component$(() => {
  const mainEl = useSignal<HTMLElement | undefined>();
  const isMenu = useSignal(false);
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
        three(mainEl);
      });
    }),
  );

  useOnDocument(
    "keydown",
    $((e) => {
      if (e.key === "Escape" && !isMenu.value) {
        mainEl.value?.removeEventListener("mousemove", gameMouseEvent);
        isMenu.value = true;
      } else if (e.key === "Escape" && isMenu.value) {
        mainEl.value?.addEventListener("mousemove", gameMouseEvent);
        isMenu.value = false;
      }
    }),
  );

  return (
    <main
      ref={mainEl}
      class={"relative " + (isMenu.value ? "cursor-auto" : "cursor-none")}
    >
      <Menu isMenu={isMenu} />

      <PreGameLoader preLoader={preLoader} />
      <GunScope />
    </main>
  );
});
