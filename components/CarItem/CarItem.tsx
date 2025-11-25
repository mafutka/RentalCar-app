import { Car } from "@/types/types";
import css from "./CarItem.module.css";
import Image from "next/image";
import Link from "next/link";

interface CarItemProps {
    car: Car;
}

export default function CarItem({ car }: CarItemProps) {
  return (
    <li className={css.card}>
      <img src={car.img} alt={car.model} className={css.image} />

      <h3 className={css.title}>
        {car.brand} {car.model}
      </h3>

      <p className={css.price}>{car.rentalPrice}</p>
    </li>
  );
}

// export default function CarItem({ car }: CarItemProps ) {
//     const {
//     id,
//     brand,
//     model,
//     year,
//     img,
//     rentalPrice,
//     address,
//     type,
//     mileage,
//   } = car;

//   return (
//     <div className={css.item}>
        
//         <Image src={img} alt={`${brand} ${model}`} className={css.image}></Image>

//         <div className={css.header}>
//         <h3 className={css.title}>
//           {brand} <span className={css.model}>{model}</span>, {year}
//         </h3>
//         <p className={css.price}>{rentalPrice}</p>
//       </div>

//       <ul className={css.list}>
//         {/* <li>{city}</li>
//         <li>{country}</li> */}
//         <li>{type}</li>
//         <li>{mileage.toLocaleString()} km</li>
//       </ul>

//       <Link href={`/catalog/${id}`} className={css.button}>
//         Read more
//       </Link>

//     </div>
//   )
// }