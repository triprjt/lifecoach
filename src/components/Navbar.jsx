import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"; // import the Link component

const Navbar = ({ onBookSession }) => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const handleNav = (event) => {
    console.log("////////");
    event.preventDefault();

    nav ? setNav(false) : setNav(true);
  };
  const handleDropDownOpen = () => {
    setDropDownOpen(true);
  };

  const handleDropDownClose = () => {
    setDropDownOpen(false);
  };
  
  return (
    <div className="flex justify-between items-center h-24 max-w-[1540px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <a href="">Mabi.</a>
      </h1>
      <ul className="hidden md:flex justify-end gap-6">
        {/* <li className="p-4 text-2xl">Home</li> */}
        {/* <li className="p-4 text-2xl">Company</li> */}
        <li className="p-4 text-2xl cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="p-4 text-2xl cursor-pointer">
          <a onClick={() => navigate("/form")}>Contact</a>
        </li>
        <li
          className="p-4 text-2xl relative"
          onMouseEnter={handleDropDownOpen}
          onMouseLeave={handleDropDownClose}
        >
          <button className="cursor-pointer focus:outline-none">
            Resources
          </button>
          {dropDownOpen && (
            <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg p-2">
              <li>
                <a href="#cards">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">EBook</a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <button
        onClick={() => {
          navigate("./form");
        }}
        className="text-white mr-2 align-middle z-50 text-center border-2 border-gray font-bold text-sm rounded whitespace-nowrap px-2 py-2 bg-blue-600"
      >
        Book a session
      </button>

      <button
        className=" cursor-pointer mr-2 md:hidden z-50"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? (
          <AiOutlineClose size={30} color="red" />
        ) : (
          <AiOutlineMenu size={30} color="green" />
        )}
      </button>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[30%] h-full  bg-gradient-to-t from-dfe9f3 to-white ease-in-out z-40 duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Mabi</h1>
        <li className=" p-4 rounded-lg text-stroke-2 text-stroke-color-black text-gray-400 mx-auto text-lg font-mono font-semi-bold border-gray-600">
          <a href="#about">About</a>
        </li>
        <li className="p-4 rounded-lg text-stroke-2 text-stroke-color-black text-gray-400 mx-auto text-lg font-mono font-semi-bold border-gray-600">
          <a className="cursor-pointer" onClick={() => navigate("/form")}>
            Contact
          </a>
        </li>
        <li className="p-4 rounded-lg text-stroke-2 text-stroke-color-black text-gray-400 mx-auto text-lg font-mono font-semi-bold border-gray-600">
          <a href="#cards">Services</a>
        </li>
        <li className="p-4 rounded-lg text-stroke-2 text-stroke-color-black text-gray-400 mx-auto text-lg font-mono font-semi-bold border-gray-600">
          <a href="#">Blog</a>
        </li>
        <li className="p-4 rounded-lg text-stroke-2 text-stroke-color-black text-gray-400 mx-auto text-lg font-mono font-semi-bold border-gray-600">
          <a href="#">EBook</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
