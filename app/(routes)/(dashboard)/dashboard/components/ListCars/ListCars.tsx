"use client";
import { ListCarsProps } from "./ListCars.type";
import { CarCard } from "@/components/common/CarCard";
import { Heart } from "lucide-react";
import ModalAddReservation from "@/components/common/ModalAddReservation/ModalAddReservation";
import { usedLovedCars } from "@/hooks/use-loved-car";

export default function ListCars(props: ListCarsProps) {
  const { cars } = props;

  const { addLoveItem, lovedItems, removeLovedItem } = usedLovedCars();

  return (
    <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 lg:grid-cols-4">
      {cars.length === 0 && <p>No vehicles found</p>}

      {cars.map((car) => {
        const { id } = car;
        const likedCar = lovedItems.find((item) => item.id === id);

        return (
          <CarCard car={car} key={car.id}>
            <div className="flex items-center gap-x-3">
              <ModalAddReservation car={car} />
              <Heart
                className={`mt-2 cursor-pointer ${likedCar && "fill-black"}`}
                onClick={
                  likedCar ? () => removeLovedItem(id) : () => addLoveItem(car)
                }
              />
            </div>
          </CarCard>
        );
      })}
    </div>
  );
}
