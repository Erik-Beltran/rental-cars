"use client";
import FormCar from "@/components/common/FormCar/FormCar";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Interface } from "readline";

type CarData = {
  name: string;
  cv: string;
  transmission: string;
  people: string;
  photo: string;
  engine: string;
  type: string;
  price: string;
  isPublish: boolean;
  id: string;
  userId: string;
};

const carData: CarData = {
  name: "",
  cv: "",
  transmission: "",
  people: "",
  photo: "",
  engine: "",
  type: "",
  price: "",
  isPublish: false,
  id: "",
  userId: "",
};

export function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Add new car
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-sm:overflow-y-scroll max-sm:h-full">
        <DialogHeader>
          <DialogDescription>
            <FormCar setOpenDialog={setOpenDialog} buttonLabel="Create Car" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
