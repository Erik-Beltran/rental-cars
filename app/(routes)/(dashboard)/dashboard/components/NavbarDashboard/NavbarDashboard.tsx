import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SiderbarRoutes } from "../SiderbarRoutes";
import { UserButton } from "@clerk/nextjs";

export function NavbarDashboard() {
  return (
    <nav
      className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 bg-background 
    md:px-6"
    >
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SiderbarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-end w-full gap-x-2">
        <UserButton />
      </div>
    </nav>
  );
}
