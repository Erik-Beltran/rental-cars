"use client";

import { Fuel, Gauge, Gem, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CarCardProps } from "./CarCard.types";

export function CarCard(props: CarCardProps) {
  const { car, showStatus, children } = props;
  const router = useRouter();

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between">
      <div>
        {showStatus && (
          <p
            className={`rounded-t-lg p-1 text-center text-white
        ${car.isPublish ? "bg-green-700" : "bg-red-300"}
        `}
          >
            {car.isPublish ? "Published" : "Not Published"}
          </p>
        )}
        <Image
          src={car.photo}
          alt={car.name}
          width={400}
          height={600}
          className={`${showStatus ? "rounded-b-lg" : "rounded-lg"} w-full`}
        />
      </div>

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl">{car.name}</p>
          <p>{car.price} $ /day</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-4 mb-2">
          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>
          <p className="flex items-center">
            <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>
          <p className="flex items-center">
            <Users className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>
          <p className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>
          <p className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.cv} CV
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
