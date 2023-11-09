"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import SideBarItems from "./sidebar-items";
import { usePathname } from "next/navigation";

const ghostRoutes = [
  {
    icon: Layout,
    label: "DashBoard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

const SideBarRoute = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : ghostRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((routes) => (
        <SideBarItems
          key={routes.href}
          icon={routes.icon}
          label={routes.label}
          href={routes.href}
        />
      ))}
    </div>
  );
};

export default SideBarRoute;
