import React, { useRef } from "react";
import Typed from "react-typed";
import model from "../assets/nobg.png";
import rightArrow from "../assets/rightArrow.png";
import { useState } from "react";
import Form from "./Form.js";
import { Link, useNavigate } from "react-router-dom"; // import the Link component

const Hero = ({ onGetStartedClick }) => {
  const [begin, setBegin] = useState(false);
  const navigate = useNavigate();

  const mainPage = () => {
    return (
      <div className="flex flex-col md:flex-row text-black">
        <div className=" mt-8 md: max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold md:py-6">
            Move from… Overthinking
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              to success in
            </p>
            <Typed
              className="md:text-5xl text-[#284e9e] sm:text-4xl text-xl text font-bold md:pl-4 pl-2"
              strings={["Career", "Family", "Health"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl mt-4 font-bold text-gray-500">
            Start your journey to become the best version of yourself.
          </p>
          <div className="flex mt-10 sm:flex-row items-center justify-center w-full">
            {/* <img src={rightArrow} className="w-"></img> */}
            <button
              onClick={() => {
                navigate("/form");
              }}
              className="bg-[#00df9a] w-auto text-black rounded-md font-medium text-xl w-[200px]  my-6 px-8 py-3"
            >
              Let's begin now
            </button>
          </div>
        </div>
        <div className="w-2/3 h-2/3 mx-auto md: h-2/3 items-center ">
          <img src={model} className="h-[300px] md:h-full object-cover"></img>
        </div>
      </div>
    );
  };

  return !begin ? mainPage() : <Form />;
};

export default Hero;
