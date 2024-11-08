import { component$, useContext } from "@builder.io/qwik";
import gameContext from "~/game/game-context";
export const NotificationMessage = component$(() => {
  const c = useContext(gameContext);
  return (
    <div class="absolute -top-52 left-1/2 h-3/5 w-1/2 -translate-x-1/2">
      <div
        class={
          " flex h-1/2 w-full transform duration-300 ease-in-out " +
          (c.isNotification.value ? "translate-y-full" : "translate-y-0")
        }
      >
        <div class="m-auto h-1/2 w-1/2  ">
          <div class="flex h-1/2 flex-col place-content-center rounded bg-blue-400 text-center text-lg">
            <p>{c.notificationMesssage}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
