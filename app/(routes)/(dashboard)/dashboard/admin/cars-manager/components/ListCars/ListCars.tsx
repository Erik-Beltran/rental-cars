import { ListCarsProps } from "./ListCars.types";
import { CarCard } from "./CarCard";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;

  return (
    <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 lg:grid-cols-4">
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}
