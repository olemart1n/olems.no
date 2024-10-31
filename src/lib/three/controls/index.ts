import { gameMouseEvent } from "../utils";
import { shootEvent } from "../shootEvent";
import type { Signal } from "@builder.io/qwik";
import { carDirectionControls } from "./carDirectionControls";
export const addControls = (mainEl: Signal<HTMLElement | undefined>, isMenu: Signal<boolean>) => {

  document.addEventListener("pointerlockchange", () => {
    if(document.pointerLockElement === mainEl.value) {
      document.addEventListener("keydown", carDirectionControls)
      document.addEventListener("keyup", carDirectionControls)
      mainEl.value?.addEventListener("mousemove", gameMouseEvent)
      mainEl.value?.addEventListener("pointerdown", shootEvent)
      isMenu.value = false
    } else {
      document.removeEventListener("keydown", carDirectionControls)
      document.removeEventListener("keyup", carDirectionControls)
      mainEl.value?.removeEventListener("mousemove", gameMouseEvent)
      mainEl.value?.removeEventListener("pointerdown", shootEvent)
      isMenu.value = true
    }
  });
}

