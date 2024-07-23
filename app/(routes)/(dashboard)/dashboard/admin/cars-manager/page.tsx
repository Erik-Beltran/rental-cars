import { auth } from "@clerk/nextjs/server";
import { ButtonAddCar } from "./components/ButtonAddCar";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ListCars } from "./components/ListCars";

export default async function CarsManagerPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Magane your cars</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={cars} />
    </div>
  );
}
