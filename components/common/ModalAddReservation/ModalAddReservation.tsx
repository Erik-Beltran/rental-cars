"use client";
import { Car } from "@prisma/client";
import { Button } from "../../ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CalendarSelector from "./CalendarSelector/CalendarSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function ModalAddReservation(props: ModalAddReservationProps) {
  const { car } = props;
  const router = useRouter();

  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const handleReserveCar = async (car: Car, dateSelected: DateRange) => {
    try {
      const response = await axios.post("/api/checkout", {
        carId: car.id,
        price: car.price,
        startDate: dateSelected.from,
        endDate: dateSelected.to,
        carName: car.name,
      });

      toast({
        title: "Car reserve ✌🏻",
      });

      router.push("/order-confirmation");
    } catch (error) {
      console.log("error", error);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full mt-3" variant="outline">
          Reserve Car
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Dates</AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.price}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleReserveCar(car, dateSelected)}
          >
            Reserve Car
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
