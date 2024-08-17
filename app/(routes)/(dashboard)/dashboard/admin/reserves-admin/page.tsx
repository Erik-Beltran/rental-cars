import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import TableReserves from "./components/TableReserves/TableReserves";

export default async function ReservesAdminPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <TableReserves orders={orders} />
    </div>
  );
}
