"use client";
import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.type";
import { CarCard } from "@/components/common/CarCard";
import { Heart } from "lucide-react";
import ModalAddReservation from "@/components/common/ModalAddReservation/ModalAddReservation";

export default function ListCars(props: ListCarsProps) {
  const { cars } = props;
  return (
    <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 lg:grid-cols-4">
      {cars.map((car) => (
        <CarCard car={car} key={car.id}>
          <div className="flex items-center gap-x-3">
            <ModalAddReservation car={car} />
            <Heart
              className="mt-2 cursor-pointer"
              onClick={() => console.log("object")}
            />
          </div>
        </CarCard>
      ))}
    </div>
  );
}
