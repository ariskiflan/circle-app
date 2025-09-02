import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

const RootLayouts = () => {
  return (
    <>
      <div className="grid grid-cols-[20%_50%_30%]">
        <div className=" sticky top-0 h-screen">
          <Sidebar />
        </div>

        <main className=" ">
          <Outlet />
        </main>

        <div className=" sticky top-0 h-screen">
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default RootLayouts;
