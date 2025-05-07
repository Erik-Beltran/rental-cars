import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Car } from "@prisma/client";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const usedLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );
        if (existingItem) {
          return toast({
            title: "El coche ya existe en la lista 🩷",
          });
        }
        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast({
          title: "Car added 🚘 ",
        });
      },

      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: "Car removed",
        });
      },
    }),
    {
      name: "loved-cars-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
