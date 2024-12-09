import {
  $,
  component$,
  Slot,
  useOnWindow,
  useStylesScoped$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { LuSun } from "@qwikest/icons/lucide";
import styles from "./style.css?raw";
export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();
  const pathname = loc.url.pathname;

  useOnWindow(
    "DOMContentLoaded",
    $(() => {
      // Check user's `prefers-color-scheme`
      const isSystemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (isSystemDarkMode) {
        document.documentElement.classList.add("dark");
      }
    }),
  );

  return (
    <main class="bg-slate-300 p-5 dark:bg-gray-800 ">
      <nav class=" rounded bg-slate-400  p-1 shadow-md dark:bg-gray-950">
        <h1 class="my-1 text-center text-lg ">Components</h1>
        <NavLink
          href="/ui/chat/"
          isActive={pathname === "/ui/chat/"}
          innerText="Chat"
        />
        <NavLink
          href="/ui/card/"
          isActive={pathname === "/ui/card/"}
          innerText="Card"
        />
        <NavLink
          href="/ui/button/"
          isActive={pathname === "/ui/button/"}
          innerText="Button"
        />
      </nav>

      <div class=" mx-auto w-10/12 rounded-sm bg-slate-200 shadow-md outline outline-1 outline-slate-400 dark:bg-gray-950 dark:text-slate-50">
        <header class="border-1 flex border-b border-slate-600 bg-slate-300 p-1 shadow-lg  dark:bg-black">
          <p class="w-full">
            {loc.url.pathname
              .replace(/^\/|\/$/g, "")
              .split("/")
              .join(" / ")}
          </p>
          <button
            class="aspect-square h-6 rounded-sm bg-slate-500  shadow-lg outline outline-1 outline-slate-500"
            onClick$={() => {
              console.log("HELLO");
              if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
              } else {
                document.documentElement.classList.add("dark");
              }
            }}
          >
            <LuSun class="m-auto h-5 w-5 text-yellow-50" />
          </button>
        </header>
        <h1 class="ps-16 text-3xl font-bold capitalize">
          {loc.url.pathname.split("/")[2]}
        </h1>
        <div class="dark:bg-initial-dark rounded p-16 ">
          <Slot />
        </div>
      </div>
    </main>
  );
});

// p-7 lg:p-12

const NavLink = component$(
  ({
    href,
    isActive,
    innerText,
  }: {
    href: string;
    isActive: boolean;
    innerText: string;
  }) => {
    return (
      <Link
        href={href}
        class={`mx-auto my-1 block w-full transform rounded  py-2 text-slate-100  duration-100 ease-in-out hover:bg-slate-100 dark:text-slate-800 ${isActive ? " bg-gray-800 ps-7 font-bold  dark:bg-slate-200 " : "bg-gray-400 ps-1 outline outline-1"}`}
      >
        {(isActive ? "-> " : "") + innerText}
      </Link>
    );
  },
);
