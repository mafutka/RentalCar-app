import { create } from "zustand";
import { Car } from "@/types/types";
import { getCars, getCarById as fetchCarById } from "@/lib/api/api";

interface CarsState {
  cars: Car[];
  page: number;
  hasMore: boolean;
  totalPages: number;

  setTotalPages: (value: number) => void;
  setCars: (items: Car[]) => void;
  addCars: (items: Car[]) => void;
  increasePage: () => void;
  setHasMore: (value: boolean) => void;
  getCarById: (id: string, forceFetch?: boolean) => Promise<Car | null>;
}

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  page: 1,
  hasMore: true,
  totalPages: 1,

  setCars: (items) => set({ cars: items }),
  addCars: (items) => set((state) => ({ cars: [...state.cars, ...items] })),
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  setHasMore: (value) => set({ hasMore: value }),
  setTotalPages: (value) => set({ totalPages: value }),

  getCarById: async (id: string, forceFetch = false) => {
  const { cars } = get();
  const cached = cars.find((c) => c.id === id);
  if (cached && !forceFetch) return cached;

  const car = await fetchCarById(id);
  if (car) set({ cars: [...cars.filter(c => c.id !== id), car] });
  return car;
}
}));