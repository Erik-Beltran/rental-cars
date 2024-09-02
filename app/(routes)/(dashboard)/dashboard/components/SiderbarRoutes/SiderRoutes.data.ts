import { Calendar, Car, Heart, KeySquare } from "lucide-react";

export const dataGeneralSidebar = [
  { icon: Car, label: "Cars", href: "/cars" },
  { icon: Calendar, label: "Cars Reserves", href: "/reserves" },
  { icon: Heart, label: "Loved Cars", href: "/loved-cars" },
];

export const dataAdminSidebar = [
  {
    icon: KeySquare,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "All Reserves",
    href: "/dashboard/admin/reserves-admin",
  },
];
