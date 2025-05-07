"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usedLovedCars } from "@/hooks/use-loved-car";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavbarRoutes } from "./NavbarRoutes";

export function Navbar() {
  return (
    <div className="max-w-5xl py-5 mx-auto  ">
      <div className="flex justify-between px-4">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.svg" alt="rental cars" width={50} height={50} />
          <span className="text-xl font-bold">Rental Cars</span>
        </Link>
        <div className="hidden xl:block">
          <NavbarRoutes />
        </div>

        <div className="block xl:hidden">
          <Sheet modal>
            <SheetTrigger className="flex items-center">
              <Menu className="mr-4" />
              <UserButton />
            </SheetTrigger>
            <SheetContent side="right">
              <NavbarRoutes mobileView showUser={false} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
