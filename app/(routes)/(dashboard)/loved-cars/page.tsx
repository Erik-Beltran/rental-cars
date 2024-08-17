import { auth } from "@clerk/nextjs/server";
import ListLoveCars from "./ListLovedCars/ListLoveCars";
import { redirect } from "next/navigation";

export default function LoveCarPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  
  return (
    <div>
      <h1 className="text-2xl">Cars that you liked</h1>
      <ListLoveCars />
    </div>
  );
}
