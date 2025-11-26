"use client";

import { useEffect, useState } from "react";
import { getCars } from "../../lib/api/api";
import { useCarsStore } from "../../lib/store/carStore";
import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";

export default function CarList() {
  const cars = useCarsStore((s) => s.cars);
  const page = useCarsStore((s) => s.page);
  const hasMore = useCarsStore((s) => s.hasMore);

  const setCars = useCarsStore((s) => s.setCars);
  const addCars = useCarsStore((s) => s.addCars);
  const increasePage = useCarsStore((s) => s.increasePage);
  const setHasMore = useCarsStore((s) => s.setHasMore);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { cars: items, totalPages } = await getCars(1, 12);
      setCars(items);
      setHasMore(1 < totalPages);
      setLoading(false);
    };

    load();
  }, []);

  useEffect(() => {
    if (page === 1) return;

    const loadMore = async () => {
      setLoading(true);
      const { cars: items, totalPages } = await getCars(page, 12);
      addCars(items);
      setHasMore(page < totalPages);
      setLoading(false);
    };

    loadMore();
  }, [page]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>

      {loading && <p>Loading...</p>}

      {hasMore && !loading && (
        <button className={css.button} onClick={() => increasePage()}>
          Load more
        </button>
      )}
    </div>
  );
}