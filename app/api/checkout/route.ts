import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { date } from "zod";

// const corsHeader = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
//   "Access-Control-Allow-Headers": "Control-Type,Authorization",
// };

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: {
      cardId: string;
      price: string;
      startDate: Date;
      endDate: Date;
      carName: string;
    };
  }
) {
  try {
    const { userId } = auth();
    const { carId, price, startDate, endDate, carName } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!carId) {
      return new NextResponse("Car ID is required", { status: 400 });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const numberOfDays = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalAmount = Number(price) * numberOfDays;

    const order = await db.order.create({
      data: {
        carId,
        carName: carName,
        userId: userId,
        status: "confirmed",
        totalAmount: totalAmount.toString(),
        orderDate: startDate,
        orderEnd: endDate,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log("[ORDER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
