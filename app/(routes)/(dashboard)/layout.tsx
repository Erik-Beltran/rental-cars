import Image from "next/image";
import { Siderbar } from "./dashboard/components/Siderbar";
import { NavbarDashboard } from "./dashboard/components/NavbarDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <div className="hidden h-full xl:block w-80 xl:fixed">
        <Siderbar />
      </div>
      <div className="w-full h-full xl:ml-80">
        <NavbarDashboard />
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
