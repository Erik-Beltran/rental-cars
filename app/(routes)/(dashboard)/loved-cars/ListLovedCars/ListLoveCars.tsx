"use client";

import { CarCard } from "@/components/common/CarCard";
import ModalAddReservation from "@/components/common/ModalAddReservation/ModalAddReservation";
import { usedLovedCars } from "@/hooks/use-loved-car";
import { Heart } from "lucide-react";
import React from "react";

export default function ListLoveCars() {
  const { removeLovedItem, lovedItems } = usedLovedCars();
  return (
    <>
      {lovedItems.length === 0 ? (
        <h2>No Cars</h2>
      ) : (
        <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 lg:grid-cols-4">
          {lovedItems.map((car) => (
            <CarCard car={car} key={car.id}>
              <div className="flex items-center gap-x-3">
                <ModalAddReservation car={car} />
                <Heart
                  className="mt-2 cursor-pointer fill-black"
                  onClick={() => removeLovedItem(car.id)}
                />
              </div>
            </CarCard>
          ))}
        </div>
      )}
    </>
  );
}
