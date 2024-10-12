import { CONFIG_APP } from "@core/configs/app";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <header className="fixed bg-gray-900 top-0 left-0 right-0 z-[999] flex shadow-lg">
        <div className="flex flex-grow items-center justify-between px-4 py-6 shadow-2 md:px-6 2xl:px-11">
          <div className="flex items-center gap-2 sm:gap-4 hover:text-secondary text-white">
            <h1 className="text-xl font-bold">{CONFIG_APP.APP_NAME}</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
