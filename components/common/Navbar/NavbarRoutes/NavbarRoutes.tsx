import { Button } from "@/components/ui/button";
import { usedLovedCars } from "@/hooks/use-loved-car";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

export function NavbarRoutes({
  mobileView = false,
  showUser = true,
}: {
  mobileView?: boolean;
  showUser?: boolean;
}) {
  const { userId } = useAuth();
  const { lovedItems } = usedLovedCars();
  return (
    <>
      <div
        className={`flex items-center justify-center gap-x-7 ${
          mobileView ? "flex-col gap-y-7 pt-4" : "flex-row"
        }`}
      >
        <Link href="/cars" className="flex items-center justify-center  ">
          List Car
        </Link>
        <Link href="/dashboard" className="flex items-center justify-center  ">
          Dashboard
        </Link>
        {userId ? (
          <>
            <Link href="/loved-cars" className="flex gap-x-2">
              <span className="block xl:hidden">Loved Cars</span>
              <Heart
                strokeWidth={1}
                className={`cursor-pointer ${
                  lovedItems.length > 0 && "fill-black"
                }`}
              />
            </Link>
            {showUser && <UserButton />}
          </>
        ) : (
          <Link href="/sign-in" className="flex gap-x-3">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </>
  );
}
