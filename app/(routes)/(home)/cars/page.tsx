import { Navbar } from "@/components/common/Navbar/Navbar";
import { db } from "@/lib/db";
import React, { useEffect } from "react";
import HeaderCars from "./components/HeaderCars/HeaderCars";
import FiltersAndList from "./components/FiltersAndList/FiltersAndList";
import { currentUser } from "@clerk/nextjs/server";

export default async function CarsPage() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <HeaderCars />
        <div>
          <FiltersAndList cars={cars} />
        </div>
      </div>
    </div>
  );
}
