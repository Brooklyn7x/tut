import React from "react";
import MobileSideBar from "./mobilesidebar";
import NavBarRoutes from "@/components/ui/navbar-routes";

const NavBar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-slate-100 shadow-md">
      <MobileSideBar />
      <NavBarRoutes />
    </div>
  );
};

export default NavBar;
