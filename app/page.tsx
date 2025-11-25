"use client";

import { BigButton } from "@/components/BigButton/BigButton"
import css from "./page.module.css"
import { useRouter } from "next/navigation"

export default function Homepage() {
  const router = useRouter();
  return (
    <section className={css.container}>
      <div className={css.heroinfo}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.description}>Reliable and budget-friendly rentals for any journey</p>
        <div className={css.button}>
          <BigButton onClick={() => router.push("/catalog")}>
            View Catalog
          </BigButton>
        </div>
      </div>
    </section>
  )
}