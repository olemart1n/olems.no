import { component$, type Signal } from "@builder.io/qwik";
export interface MenuProps {
  isMenu: Signal<boolean>;
}

export const Menu = component$<MenuProps>(({ isMenu }) => {
  return (
    <div class="absolute -left-1/4 h-full w-1/2 text-white">
      <div
        class={
          "translate-x h-full w-1/2 transform bg-slate-800/[.6] duration-300 ease-in-out " +
          (isMenu.value ? "translate-x-full" : "translate-x-0")
        }
      >
        <button class="fixed left-full top-1 ml-1 h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 text-xs font-bold text-slate-100 ">
          esc
        </button>
        <div class="text-red-400">
          <p class="underline">under utvikling</p>
          <ul>
            <li class="line-through">stjerner</li>
            <li>earth ? mars?</li>
            <li class="line-through">høydeforskjell</li>
            <li>intersect pyramide</li>
            <li>spor etter hjul</li>
            <li>Variabel fart</li>
            <li>Hopp, andre objekter</li>
            <li class="line-through">mousemove | camera</li>
            <li>assets?</li>
            <li>gun + scope</li>
          </ul>
        </div>
      </div>
    </div>
  );
});
