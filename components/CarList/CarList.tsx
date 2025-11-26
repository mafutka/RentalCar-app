"use client";

import { useEffect, useState } from "react";
import { getCars } from "@/lib/api/api";
import { useCarsStore } from "@/lib/store/carStore";
import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";

export default function CarList() {

  const cars = useCarsStore((s) => s.cars);
  const page = useCarsStore((s) => s.page);
  const hasMore = useCarsStore((s) => s.hasMore);
  const totalPages = useCarsStore((s) => s.totalPages);

  const setCars = useCarsStore((s) => s.setCars);
  const addCars = useCarsStore((s) => s.addCars);
  const increasePage = useCarsStore((s) => s.increasePage);
  const setHasMore = useCarsStore((s) => s.setHasMore);
  const setTotalPages = useCarsStore((s) => s.setTotalPages);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { cars: items, totalPages } = await getCars(1, 12);
        setCars(items);
        setTotalPages(totalPages); 
        setHasMore(1 < totalPages);
      } catch (error) {
        console.error("Failed to load cars:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [setCars, setHasMore, setTotalPages]);

  useEffect(() => {
    if (page === 1) return; 

    const loadMore = async () => {
      setLoading(true);
      try {
        const { cars: items } = await getCars(page, 12);
        addCars(items);
        setHasMore(page < totalPages);
      } catch (error) {
        console.error("Failed to load more cars:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMore();
  }, [page, addCars, setHasMore, totalPages]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>

      {loading && <p>Loading...</p>}

      {hasMore && !loading && (
        <button
          className={css.button}
          onClick={() => increasePage()}
          disabled={loading}
        >
          Load more
        </button>
      )}
    </div>
  );
}