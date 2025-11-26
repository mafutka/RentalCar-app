import { clientApi } from "./clientApi";
import { Car } from "@/types/types";

interface GetCarsResponse {
    cars: Car[];
    totalCars: number;
    totalPages: number;
    page: number;
}

export const getCars = async (page = 1, limit = 12, filters = {}) => {
  const { data } = await clientApi.get<GetCarsResponse>("/cars", {
    params: { page, limit, ...filters },
  });

  return data;
};

export const getCarById = async (id: string) => {
  try {
    const { data } = await clientApi.get<Car>(`/cars/${id}`);
    return data;
  } catch (error: any) {
    console.error("getCarById error:", error.response?.status, error.response?.data);
    return null; 
  }
};

export const getBrands = async () => {
  const { data } = await clientApi.get<string[]>("/brands");
  return data;
};