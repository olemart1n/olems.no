import { component$, Slot } from "@builder.io/qwik";

export const ComponentSlot = component$(() => {
  return (
    <div class="rounded border border-slate-200">
      <Slot />
    </div>
  );
});
