import React from "react";
import SideBar from "./_components/SideBar";
import NavBar from "./_components/navbar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 bg-red-300">
        <NavBar />
      </div>
      <div className="hidden md:flex bg-red-100 h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
