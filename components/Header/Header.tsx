import Navigation from "../Navigation/Navigation"
import css from "./Header.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <header className={css.header}>
            <Link href="/" className={css.logo}>
                Rental<span className={css.span}>Car</span>
            </Link>
            <Navigation></Navigation>
        </header>
    )
}