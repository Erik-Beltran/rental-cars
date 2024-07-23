"use client";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { ButtonEditCarProps } from "./ButtonEdit.types";
import { Pencil } from "lucide-react";
import FormCar from "@/components/common/FormCar/FormCar";

export function ButtonEdit(props: ButtonEditCarProps) {
  const { carData } = props;

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Edit <Pencil className="ml-2 w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormCar
              carData={carData}
              setOpenDialog={setOpenDialog}
              buttonLabel="Edit Car"
              editMode
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
