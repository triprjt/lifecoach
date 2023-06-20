import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar2 = () => {
  const [open, isOpen] = useState(true);
  return (
    <nav className="lg:flex lg:justify-between lg:shadow-lg">
      <div className="flex justify-between items-center px-4 py-4">
        <div
          style={{ whiteSpace: "nowrap" }}
          className="text-3xl ml-3 lg:ml-4 bold mt-1"
        >
          Mahesh Vagicherla
        </div>
        <div className="lg:hidden pt-2">
          {open ? (
            <AiOutlineMenu fontSize={28} onClick={() => isOpen(!open)} />
          ) : (
            <AiOutlineClose fontSize={28} onClick={() => isOpen(!open)} />
          )}
        </div>
      </div>
      <div className={open ? "hidden px-4 lg:block" : "block px-4 lg:block"}>
        <a
          href="#home"
          style={{ whiteSpace: "nowrap", fontSize: "28px" }}
          className="font-sans duration-300 block mr-3 ml-3 lg:inline-blo ck  rounded pr-2 pl-2 mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
        >
          Home
        </a>
        <a
          href="#education"
          style={{ whiteSpace: "nowrap", fontSize: "28px" }}
          className="font-sans duration-300 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2 hover:border-b-4  mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
        >
          Nav Link 1
        </a>
        <a
          href="#experience"
          style={{ whiteSpace: "nowrap", fontSize: "28px" }}
          className="font-sans duration-300 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2  mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
        >
          Nav Link 2
        </a>
      </div>
    </nav>
  );
};

export default Navbar2;
