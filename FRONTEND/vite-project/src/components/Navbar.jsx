import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
const Navbar = () => {
  return (
    <header className="w-full bg-base-300 border-b border-base-content/10 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="mx-auto max-w-6xl  p-4">
        <div className="flex items-center justify-between">
          {/* <h1 className="text-4xl font-bold text-gray-100">
            Free{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              -will
            </span>
          </h1> */}
          <h1 className="text-4xl font-bold text-gray-100">
  Free{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    will
  </span>
</h1>

          <div className="flex items-center   gap-6">
            <Link
              to={"/create"}
               className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-4xl font-medium hover:bg-blue-700 transition">
            {/* // className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-4 py-2 transition"> */}
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
