import { getCarById } from "@/lib/api/api";

interface CarPageProps {
  params: {
    id: string;
  };
}

export default async function CarPage({ params }: CarPageProps) {
  const car = await getCarById(params.id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <img src={car.img} alt={car.brand} />
      <h1>{car.brand} {car.model}</h1>
      <p>Year: {car.year}</p>
      <p>Price: {car.rentalPrice}</p>
    </div>
  );
}