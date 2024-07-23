"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CarCardProps } from "./CarCard.types";
import { ButtonEdit } from "./ButtonEditCar";
import axios from "axios";

export function CarCard(props: CarCardProps) {
  const { car } = props;
  const router = useRouter();

  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({
        title: "Car deleted ❌",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Somethig went wrong",
        variant: "destructive",
      });
    }
  };

  const handlerPublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });

      if (publish) {
        toast({
          title: "Car Published ✌🏻",
        });
      } else {
        toast({
          title: "Car Unpublished ⚠️",
        });
      }
      router.refresh();
    } catch (error) {
      toast({
        title: "Somethig went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between">
      {/* <div className="lg:h-[250px]  flex items-center"> */}

      {/* {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center bg-green-700">
          Published
        </p>
      ) : (
        <p className="absolute top-0 right-0 w-full p-1 text-center bg-red-300 text-white rounde-t-lg">
          Not Published
        </p>
      )} */}
      <div>
        <p
          className={`rounded-t-lg p-1 text-center text-white
        ${car.isPublish ? "bg-green-700" : "bg-red-300"}
        `}
        >
          {car.isPublish ? "Published" : "Not Published"}
        </p>
        <Image
          src={car.photo}
          alt={car.name}
          width={500}
          height={500}
          className="rounded-b-lg w-full"
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
        <div className="flex justify-between">
          <Button variant="outline" onClick={deleteCar}>
            Delete
            <Trash className="w-4 h-4 ml-2" />
          </Button>
          <ButtonEdit carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlerPublishCar(false)}
          >
            Unpublish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => handlerPublishCar(true)}
          >
            Publish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
