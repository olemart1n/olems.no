import { component$ } from "@builder.io/qwik";
export const Controllers = component$(() => {
  return (
    <div class="mx-auto mt-3 w-52">
      <h2 class="mx-auto w-fit text-lg">Styring</h2>
      <div class="flex flex-col gap-2">
        <div class="mx-auto flex flex-col place-content-center place-items-center">
          <p>Framover</p>
          <Button text="W" />
        </div>

        <div class="mx-auto flex place-content-center place-items-center gap-2">
          <div class="flex flex-col gap-5 ">
            <Button text="A" />
          </div>
          <div class="flex flex-col gap-5">
            <Button text="S" />
          </div>
          <div class="flex flex-col gap-5">
            <Button text="D" />
          </div>
        </div>
        <div class="flex w-full justify-around">
          <p>Venstre</p>
          <p>Revers</p>
          <p>Høyre</p>
        </div>

        <div class="mx-auto flex gap-5">
          <p>Skyt</p>
          <div class=" relative h-16 w-10 rounded-xl border border-slate-50 bg-slate-700">
            <div class="border-b-1 h-8 w-full rounded-t-lg border border-slate-100">
              <div class="h-full w-1/2 rounded-tl-lg bg-red-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Button = ({ text }: { text: string }) => {
  return (
    <div class="h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 text-center font-bold text-slate-100 ">
      {text}
    </div>
  );
};
