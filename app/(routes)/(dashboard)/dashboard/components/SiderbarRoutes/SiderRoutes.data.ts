import { Calendar, Car, Heart, KeySquare } from "lucide-react";

export const dataGeneralSidebar = [
  { icon: Car, label: "Cars", href: "/dashboard" },
  { icon: Calendar, label: "Cars Reserves", href: "/reserves" },
  { icon: Heart, label: "Loved Cars", href: "/loved-cars" },
];

export const dataAdminSidebar = [
  { icon: KeySquare, label: "Magnage your cars", href: "/magnament" },
  { icon: Calendar, label: "All Reserves", href: "/all-reserves" },
];
