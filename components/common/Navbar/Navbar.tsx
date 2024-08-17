"use client";
import { Button } from "@/components/ui/button";
import { usedLovedCars } from "@/hooks/use-loved-car";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { userId } = useAuth();
  const { lovedItems } = usedLovedCars();

  return (
    <div className="max-w-5xl py-5 mx-auto  ">
      <div className="flex justify-between px-4">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.svg" alt="rental cars" width={50} height={50} />
          <span className="text-xl font-bold">Rental Cars</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7  ">
          <Link href="/cars" className="flex items-center justify-center  ">
            List Car
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center justify-center  "
          >
            Dashboard
          </Link>
          {userId ? (
            <>
              <Link href="/loved-cars">
                <Heart
                  strokeWidth={1}
                  className={`cursor-pointer ${
                    lovedItems.length > 0 && "fill-black"
                  }`}
                />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
