import { Button } from "@/components/ui/button";
import Image from "next/image";
import { categoryOurFleet, dataFirstBlockOur } from "./Fleet.data";
import { cn } from "@/lib/utils";

export default function Fleet() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 lg:py-40 p-6">
      <h3 className="text-2xl lg:text-6xl font-bold">Our Vehicle Feet</h3>
      <p className="text-lg mt-2 lg:mt-5 lg:text-xl text-center w-full mx-auto max-w-2xl mb-5 lg:mb-10">
        Dont deny yourself pleasure of driving the best premium cars around the
        world here and now
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-center justify-center mb-5 max-2xl mx-auto">
        {categoryOurFleet.map(({ name, active }) => (
          <div
            key={name}
            className={cn(
              "rounded-xl py-2 px-3",
              active ? "bg-black text-white" : "bg-slate-100"
            )}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-3 gap-x-6 mb-6">
          {dataFirstBlockOur.map(({ url }) => (
            <div key={url}>
              <Image
                src={`/images/fleet/${url}`}
                alt="car"
                width={400}
                height={300}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
