import CarPageClient from "./CarPageClient";
import { getCarById } from "@/lib/api/api";
import { Car } from "@/types/types";

interface PageProps {
  params: { id: string };
}

export default async function CarPage({ params }: PageProps) {
 
  const car: Car | null = await getCarById(params.id);

  if (!car) return <p>Car not found</p>;

  return <CarPageClient car={car} />;
}