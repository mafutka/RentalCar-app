"use client"
import Link from "next/link";

import css from "./BigButton.module.css";
import { useRouter } from "next/router";

export interface BigButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    href: string;
}

export function BigButton({ children, href }: BigButtonProps) {
    return (
        <Link href={href} className={css.button}>
            {children}
        </Link>
    );
}