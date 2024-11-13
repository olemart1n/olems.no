import { gameMouseEvent } from "./game-mouse-event";
import { events } from "../events";
import { carDirectionControls } from "./car-direction-controls";
import type { GameContextStore } from "../game-context";

export const addControls = (conn: WebSocket, gameStore: GameContextStore) => {
  const shootEvent = (e: PointerEvent) => events.shoot(e, conn);

  document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement === gameStore.mainEl.value) {
      document.addEventListener("keydown", carDirectionControls);
      document.addEventListener("keyup", carDirectionControls);
      gameStore.mainEl.value.addEventListener("mousemove", gameMouseEvent);
      gameStore.mainEl.value.addEventListener("pointerdown", shootEvent);
    } else {
      // REMOVE GAME CONTROLS (MENY SHOULD BE VISIBLE)
      document.removeEventListener("keydown", carDirectionControls);
      document.removeEventListener("keyup", carDirectionControls);
      gameStore.mainEl.value?.removeEventListener("mousemove", gameMouseEvent);
      gameStore.mainEl.value?.removeEventListener("pointerdown", shootEvent);
    }
    gameStore.isMenu.value = !gameStore.isMenu.value;
  });
};
