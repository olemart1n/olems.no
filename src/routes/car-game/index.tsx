import {
  component$,
  useSignal,
  useContextProvider,
  useStore,
  useOnDocument,
  $,
} from "@builder.io/qwik";
import gameContext from "~/game/game-context";
import { game, mesh } from "~/game";
import {
  GunScope,
  Menu,
  ErrorMessage,
  PreGameLoader,
  NotificationMessage,
  HpBar,
} from "~/components/game";
import * as THREE from "three";
import { type GameContextStore } from "~/game/game-context";
import moonTexture from "./moon-texture.jpeg";
export default component$(() => {
  const preLoader = useSignal<HTMLDivElement | undefined>();
  const username =
    import.meta.env.PUBLIC_ENV === "dev"
      ? "Ola" + Math.round(Math.random() * 100).toString()
      : "";
  const gameStore = useStore<GameContextStore>({
    connectedPlayersLength: 0,
    username: useSignal(username),
    isError: false,
    errorMessage: "",
    isNotification: useSignal(false),
    notificationMesssage: "",
    isMenu: useSignal(true),
    isConnectedToSocket: false,
    mainEl: useSignal<HTMLElement | undefined>(),
    hpPercent: 100,
  });
  useContextProvider(gameContext, gameStore);

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
        game(gameStore);
      });
    }),
  );

  return (
    <main ref={gameStore.mainEl} class="relative ">
      <Menu />
      <PreGameLoader preLoader={preLoader} />
      <GunScope />
      <ErrorMessage />
      <NotificationMessage />
      <HpBar hpPercent={gameStore.hpPercent} />
    </main>
  );
});
