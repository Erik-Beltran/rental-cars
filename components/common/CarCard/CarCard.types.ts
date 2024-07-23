import { Car } from "@prisma/client";
import React from "react";

export type CarCardProps = {
  car: Car;
  children?: React.ReactNode;
  showStatus?: boolean;
};
