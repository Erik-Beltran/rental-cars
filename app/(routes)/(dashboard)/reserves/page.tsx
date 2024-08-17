import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import TableReserves from "./components/TableReserves/TableReserves";

export default async function ReservesPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h2 className="mb-4 text-3xl">Reserves Page</h2>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2>No cars</h2>
          <p>Make your reservations from the vehicle page </p>
          <Link href="/cars">
            <Button>List of cars</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
}
