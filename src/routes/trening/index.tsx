import { component$, useSignal, useStore, useTask$, $ } from "@builder.io/qwik";
import { fullBody, lowerBody, upperBody } from "./exercies";
import { ExDiv } from "~/components";

export default component$(() => {
  const programToShow = useSignal("upperbody");
  const pStore = useStore({ program: fullBody });
  useTask$(({ track }) => {
    track(() => programToShow.value);
    switch (programToShow.value) {
      case "upperbody":
        pStore.program = upperBody;
        break;
      case "lowerbody":
        pStore.program = lowerBody;
        break;
      case "fullbody":
        pStore.program = fullBody;
        break;

      default:
        break;
    }
  });

  const submit = $((e: SubmitEvent) => {
    let localData;
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    const objectToStore = { name: programToShow.value, data };
    if (localStorage.getItem("storedEx")) {
      localData = JSON.parse(localStorage.getItem("storedEx")!);
      localStorage.setItem(
        "storedEx",
        JSON.stringify([objectToStore, ...localData]),
      );
    } else {
      localStorage.setItem("storedEx", JSON.stringify([objectToStore]));
    }
  });

  return (
    <main>
      <div class="w-full bg-slate-300 p-2 text-center">
        <label for="program">Velg program:</label>
        <select
          class="rounded-sm border-y-indigo-700 outline"
          name="program"
          bind:value={programToShow}
        >
          <option value="upperbody">overkropp</option>
          <option value="lowerbody">underkropp</option>
          <option value="fullbody">fullkropp</option>
        </select>
      </div>
      <form
        class="mx-auto flex h-full w-full flex-col place-items-center justify-evenly md:w-1/2"
        preventdefault:submit
        onsubmit$={submit}
      >
        {pStore.program.map((ex, i) => (
          <ExDiv exercise={ex} key={i} />
        ))}

        <button class="rounded bg-blue-300 p-2 ">Loggfør</button>
      </form>
      <div class="text-white"></div>
      <dialog>
        <div></div>
      </dialog>
    </main>
  );
});
