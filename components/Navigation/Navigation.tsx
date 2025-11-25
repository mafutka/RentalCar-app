import { usePathname } from "next/navigation"
import css from "./Navigation.module.css";
import Link from "next/link";

export const Navigation = () => {
    const path = usePathname();

    return (
        <nav className={css.nav}>
            <ul className={css.navlist}>
                <li>{path !== "/" ? (
                    <Link href="/" className={css.link}>
                        Home
                    </Link>
                ) : <span className={css.active}>Home</span>}
                </li>
                <li>{path !== "/" ? (
                    <Link href="/catalog" className={css.link}>
                        Catalog
                    </Link>
                ) : <span className={css.active}>Catalog</span>}
                </li>
            </ul>
        </nav>
    )
}