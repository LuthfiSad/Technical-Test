import Navbar from "@features/_global/components/Navbar";
import { Outlet } from "react-router-dom";

const RootView = () => {

  return (
    <div className="flex min-h-screen">
      <div
        className={`relative flex flex-col duration-300 overflow-hidden flex-1 max-w-full`}
      >
        <Navbar />
        <main className={`mt-[86px] px-10 py-2`}>
          <Outlet />

        </main>
      </div>
    </div>
  );
};

export default RootView;
