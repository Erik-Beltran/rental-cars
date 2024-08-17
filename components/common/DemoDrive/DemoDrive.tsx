import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DemoDrive() {
  return (
    <div
      // className="bg-black text-white  lg:my-32 p-6 max-w-7xl mx-auto"
      className="bg-black h-screen w-screen text-center overflow-hidden relative text-white"
    >
      <div className=" h-full flex flex-col px-2 z-30 relative pt-32">
        <h3 className="text-4xl">Drive your dream car Today</h3>
        <p className="my-5 text-xl">
          Registre and explore the world of premium cars
        </p>
        <Link href="/sign-in">
          <Button variant="outline" size="lg" className="text-black">
            Register here
          </Button>
        </Link>
      </div>

      <div className="absolute top-0 bottom-0 h-full w-full z-10 ">
        <video
          className="object-cover object-center h-full w-full"
          autoPlay
          muted
          loop
          src="/video.webm"
        ></video>
      </div>
    </div>
  );
}
