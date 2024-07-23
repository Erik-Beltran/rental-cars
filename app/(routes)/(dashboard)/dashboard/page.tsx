import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  console.log("cars", cars);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Car List</h2>
      </div>
      
    </div>
  );
}
