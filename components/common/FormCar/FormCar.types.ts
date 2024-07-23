import { Car } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type FormCarProps = {
  carData?: Car;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  buttonLabel?: string;
  editMode?: boolean;
};
