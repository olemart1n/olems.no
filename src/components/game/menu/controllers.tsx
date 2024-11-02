import { component$ } from "@builder.io/qwik";
export const Controllers = component$(() => {
  return (
    <div class="ml-3 mt-3 flex w-52 flex-col gap-2">
      <h2 class="w-fit">Styring</h2>
      <div class="flex gap-5 ">
        <div class="h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 text-center font-bold text-slate-100 ">
          W
        </div>
        <p>Framover</p>
      </div>
      <div class="flex gap-5">
        <div class="h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 text-center font-bold text-slate-100 ">
          D
        </div>
        <p>Høyre</p>
      </div>
      <div class="flex gap-5">
        <div class="h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 text-center font-bold text-slate-100 ">
          A
        </div>
        <p>Venstre</p>
      </div>
      <div class="flex gap-5">
        <div class="h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 text-center font-bold text-slate-100 ">
          S
        </div>
        <p>Revers</p>
      </div>
      <div class="flex w-full gap-5">
        <p>Skyt</p>
        <div class=" relative h-16 w-10 rounded-xl bg-slate-700">
          <div class="border-b-1 h-8 w-full rounded-t-lg border border-slate-100">
            <div class="h-full w-1/2 rounded-tl-lg bg-red-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
