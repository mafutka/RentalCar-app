import css from "./catalog.module.css";
import CarList from "../../components/CarList/CarList"

export default async function CatalogPage() {
  return (
    <section className={css.wrapper}>
      <CarList />
    </section>
  );
}