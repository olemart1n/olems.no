import { component$, Slot } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
export default component$(() => {
  const loc = useLocation();
  const pathname = loc.url.pathname;

  return (
    <main class="flex p-2">
      <div class="w-3/12">
        <nav class="mx-auto h-full w-3/4 rounded bg-gray-950 bg-opacity-30 p-1 ">
          <h1 class="my-1 text-center text-lg">Components</h1>
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
        </nav>
      </div>
      <div class="w-full p-7 lg:p-12">
        <header class="h-20 w-1/2">
          <p>
            {loc.url.pathname
              .replace(/^\/|\/$/g, "")
              .split("/")
              .join(" / ")}
          </p>
          <h1 class="text-3xl capitalize">{loc.url.pathname.split("/")[2]}</h1>
        </header>
        <div class="bg-initial-dark h-3/4 w-3/4 rounded p-10 shadow-sm outline outline-2 outline-slate-600">
          <Slot />
        </div>
      </div>
    </main>
  );
});

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
        class={`mx-auto my-1 block w-full transform rounded  py-2  duration-100 ease-in-out visited:text-slate-200 hover:bg-gray-800 ${isActive ? " bg-gray-800 ps-7 font-bold text-white" : "bg-gray-600 ps-1"}`}
      >
        {(isActive ? "-> " : "") + innerText}
      </Link>
    );
  },
);
