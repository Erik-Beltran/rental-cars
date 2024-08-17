import { Navbar } from "@/components/common/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function OrderConfirmationPage() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl h-screen pt-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">!Thanks for trusting us!</h1>
          <div>
            <p className="mb-4">
              You can view all your reservations in your customer area.{" "}
            </p>
          </div>
          <Link href="/">
            <Button>Back to view products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
