import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <div className="hidden h-full xl:block w-80 xl:fixed">
        Slider bar ....
      </div>
      <div className="w-full h-full xl:ml-80">
        ...Navbar Dashboard
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
