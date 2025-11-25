"use client";

import { BigButton } from "@/components/BigButton/BigButton"
import css from "./page.module.css"
import { useRouter } from "next/navigation"

export default function Homepage() {
  const router = useRouter();
  return (
    <section>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.description}>Reliable and budget-friendly rentals for any journey</p>
      <div>
        <BigButton onClick={() => router.push("/catalog")}>
          View Catalog
        </BigButton>
      </div>
    </section>
  )
}