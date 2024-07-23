"use client";

import { CarCard } from "@/components/common/CarCard";
import { ListCarsProps } from "./ListCars.types";
import { Button } from "@/components/ui/button";
import { Trash, Upload } from "lucide-react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ButtonEdit } from "./ButtonEditCar";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const router = useRouter();

  const deleteCar = async (carId: string) => {
    try {
      await axios.delete(`/api/car/${carId}`);
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

  const handlerPublishCar = async (carId: string, publish: boolean) => {
    try {
      await axios.patch(`/api/car/${carId}`, { isPublish: publish });

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
    <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 lg:grid-cols-4">
      {cars.map((car) => (
        <CarCard car={car} key={car.id} showStatus>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => deleteCar(car.id)}>
              Delete
              <Trash className="w-4 h-4 ml-2" />
            </Button>
            <ButtonEdit carData={car} />
          </div>
          {car.isPublish ? (
            <Button
              className="w-full mt-3"
              variant="outline"
              onClick={() => handlerPublishCar(car.id, false)}
            >
              Unpublish
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              className="w-full mt-3"
              onClick={() => handlerPublishCar(car.id, true)}
            >
              Publish
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CarCard>
      ))}
    </div>
  );
}
