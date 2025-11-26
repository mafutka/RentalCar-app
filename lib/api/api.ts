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
    console.log(id)
    const { data } = await clientApi.get<Car>(`/cars/${id}`);
    return data;
  } catch (err: any) {
    console.error("getCarById error:", err.response?.status, err.response?.data);
    return null;
  }
};

export const getBrands = async () => {
  const { data } = await clientApi.get<string[]>("/brands");
  return data;
};