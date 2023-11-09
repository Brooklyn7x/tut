import Logo from "./Logo";
import SideBarRoute from "./sidebar-routes";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col bg-slate-100 overflow-y-auto shadow-md">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SideBarRoute />
      </div>
    </div>
  );
};

export default SideBar;
