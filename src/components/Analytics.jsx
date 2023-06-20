import React from "react";
import Laptop from "../assets/laptop.jpg";
import model from "../assets/nobg.png";
import { Navigate, useNavigate } from "react-router-dom";
const Analytics = ({ onGetStartedClick }) => {
  const navigate = useNavigate();
  return (
    <div id="about" className="w-full bg-white py-12 px-4">
      <div
        id="About"
        className=" font-semi-bold mb-6 md: text-center h-12 text-4xl font-semi-bold font-serif"
      >
        About Me
        <div className="ml-auto mr-auto mt-1 w-1/5 border-b border-double border-emerald-400"></div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={model} alt="/" />
        <div className="flex flex-col justify-center">
          {/* <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p> */}
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Life and Career coach
          </h1>
          <p className="font-thin text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button
            onClick={() => {
              navigate("./form");
            }}
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
