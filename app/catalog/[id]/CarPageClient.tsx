"use client";

import { Car } from "@/types/types";
import css from "./page.module.css";

interface CarPageClientProps {
  car: Car;
}

export default function CarPageClient({ car }: CarPageClientProps) {
  return (
    <div className={css.wrapper}>
      <img src={car.img} alt={car.brand} className={css.image} />
      <h1 className={css.title}>{car.brand} {car.model}</h1>
      <p>Year: {car.year}</p>
      <p>Price: ${car.rentalPrice}</p>
    </div>
  );
}