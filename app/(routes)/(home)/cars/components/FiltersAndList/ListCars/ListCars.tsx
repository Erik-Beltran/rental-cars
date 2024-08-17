"use client";
import { ListCarsProps } from "./ListCars.types";
import { useAuth } from "@clerk/nextjs";
import { usedLovedCars } from "@/hooks/use-loved-car";
import { Car } from "@prisma/client";
import { CarCard } from "@/components/common/CarCard";
import ModalAddReservation from "@/components/common/ModalAddReservation/ModalAddReservation";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SkeletonCars from "@/components/common/SkeletonCars/SkeletonCars";

export default function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { userId } = useAuth();
  const { addLoveItem, lovedItems, removeLovedItem } = usedLovedCars();

  if (!cars) {
    return <SkeletonCars />;
  }

  return (
    <>
      {cars.length === 0 && <p>No vehicles found</p>}

      <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 lg:grid-cols-4">
        {cars.map((car: Car) => {
          const { id } = car;
          const likedCar = lovedItems.find((item) => item.id === id);

          return (
            <CarCard key={car.id} car={car}>
              {userId ? (
                <div className="flex items-center gap-x-3">
                  <ModalAddReservation car={car} />
                  <Heart
                    className={`mt-2 cursor-pointer ${
                      likedCar && "fill-black"
                    }`}
                    onClick={
                      likedCar
                        ? () => removeLovedItem(id)
                        : () => addLoveItem(car)
                    }
                  />
                </div>
              ) : (
                <div className="w-full mt-2 text-center">
                  <Link href="/sign-in">
                    <Button variant="outline" className="w-full">
                      LOGIN TO BOOK
                    </Button>
                  </Link>
                </div>
              )}
            </CarCard>
          );
        })}
      </div>
    </>
  );
}
