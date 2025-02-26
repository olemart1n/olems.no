import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
export const Internal = component$(() => {
    const loc = useLocation();
    return (
        <>
            <a
                href="/dapp"
                class={
                    "oregano-regular block w-32 py-1 text-center text-2xl  hover:outline " +
                    (loc.prevUrl?.pathname.includes("dapp") &&
                        " outline outline-amber-300")
                }
            >
                dapp
            </a>
            <a
                href="/sui-apps/trustless-swap"
                class={
                    "oregano-regular block w-32  py-1 text-center text-2xl hover:outline  " +
                    (loc.prevUrl?.pathname.includes("ui") &&
                        " outline outline-amber-300")
                }
            >
                Sui apps
            </a>
        </>
    );
});
