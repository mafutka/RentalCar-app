import { Car } from "@/types/types";
import css from "./CarItem.module.css";
import { useFavoriteStore } from "@/lib/store/favoriteStore";
import Image from "next/image";
import Link from "next/link";
import { BigButton } from "../BigButton/BigButton";

interface CarItemProps {
    car: Car;
}

export default function CarItem({ car }: CarItemProps) {
    
    const toggleFavorite = useFavoriteStore((s) => s.toggleFavorite);
    const favorites = useFavoriteStore((s) => s.favorites);
    const isFav = favorites.includes(car.id);

    const [street, city, country] = car.address.split(", ");
  
return (
    <li className={css.card}>
        <div className={css.imgwrapper}>
            <img src={car.img} alt={car.model} className={css.image} />
            {/* <button
                className={css.like}
                onClick={() => toggleFavorite(car.id)}
                aria-label="Add to favorites"
            >
            <Heart
                fill={isFav ? "#3470FF" : "transparent"}
                stroke="#3470FF"
                strokeWidth={2}
            />
            </button> */}
        </div>
      
        <div className={css.info}>  
            <h3 className={css.title}>{car.brand}{" "} 
                <span className={css.span}>
                    {car.model}
                </span>, {car.year} </h3>
            <p className={css.title}>${car.rentalPrice}</p>
        </div>
        <div className={css.details}>
            <span>{city}</span>
            <span className={css.dot}> | </span>
            <span>{country}</span>
            <span className={css.dot}> | </span>
            <span>{car.rentalCompany}</span>
            <span className={css.dot}> | </span>
            <span>{car.type}</span>
            <span className={css.dot}> | </span>
            <span>{car.mileage.toLocaleString()} km</span>
        </div>

        <BigButton href={`/catalog/${car.id}`}>Read more</BigButton>
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