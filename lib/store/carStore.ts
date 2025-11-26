import { create } from "zustand"; 
import { Car } from "@/types/types"; 
import { getCars } from "../api/api";

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
    getCarById: (id: string) => Promise<Car | null>;
    
} 
export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  page: 1,
  hasMore: true,
  totalPages: 1,

  setCars: (items) => set({ cars: items }),
  addCars: (items) =>
    set((state) => ({ cars: [...state.cars, ...items] })),

  increasePage: () =>
    set((state) => ({ page: state.page + 1 })),

  setHasMore: (value) => set({ hasMore: value }),
  setTotalPages: (value) => set({ totalPages: value }),

  getCarById: async (id: string): Promise<Car | null> => {
    const { cars, totalPages } = get();

    const cached = cars.find((c) => c.id === id);
    if (cached) return cached;

    for (let page = 1; page <= totalPages; page++) {
      const data = await getCars(page, 12);
      const found = data.cars.find((c) => c.id === id);

      if (found) {
        set({ cars: [...get().cars, found] });
        return found;
      }
    }

    return null;
  },
}));
