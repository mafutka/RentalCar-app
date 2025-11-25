"use client"

import { usePathname } from "next/navigation"
import css from "./Navigation.module.css";
import Link from "next/link";

export default function Navigation() {
    const path = usePathname();

    return (
        <nav className={css.nav}>
            <ul className={css.navlist}>
                <li>{path !== "/" ? (
                    <Link href="/" className={css.link}>
                        Home
                    </Link>
                ) : (<span className={css.active}>Home</span>)}
                </li>
                <li>{path !== "/catalog" ? (
                    <Link href="/catalog" className={css.link}>
                        Catalog
                    </Link>
                ) : (<span className={css.active}>Catalog</span>)}
                </li>
            </ul>
        </nav>
    )
}