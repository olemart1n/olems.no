import { component$ } from "@builder.io/qwik";
import { Link, useLocation, type LinkProps } from "@builder.io/qwik-city";

type NavLinkProps = LinkProps & { activeClass?: string; innerText: string };

export const NavLink2 = component$(
    ({ activeClass, innerText, ...props }: NavLinkProps) => {
        const loc = useLocation();
        const isActive = loc.url.pathname.includes(props.href!);

        return (
            <Link
                {...props}
                class={`${props.class || ""} ${isActive ? activeClass : ""}`}
            >
                {innerText}
            </Link>
        );
    },
);
