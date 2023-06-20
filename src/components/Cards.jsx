import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { useNavigate } from "react-router-dom";

const Cards = ({ onGetStartedClick }) => {
  const navigate = useNavigate();

  return (
    <div id="cards" className="w-full items-center py-[2rem] px-4 bg-white">
      <div
        id="About"
        className=" font-thin mb-6 md: text-center h-12 text-3xl font-semi-bold font-serif"
      >
        Coaching Services
        <div className="ml-auto mr-auto mt-1 w-1/5 border-b border-double border-emerald-400"></div>
      </div>

      <div className="max-w-[1240px] mx-auto py-[4rem] grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Key note speaking and Corporate training
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8 text-gray-400 font-thin">
              Invite Mabi for a Keynote, Seminar or Training session for your
              team’s Mental well-being, High performance, Leadership,
              mindfulness, Conscious parenting and other customised work.
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/form");
            }}
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            View details
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            One to One power coaching with me
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8 text-gray-400 font-thin">
              Gain clarity, confidence, connection with self and fulfil your
              dreams and goals. Work with me to accelerate this journey. It’s
              time to take charge of your life.
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/form");
            }}
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            View Details
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Group coaching programme
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8 text-gray-400 font-thin">
              A powerful group coaching for selected people who are ready to
              take a leap in their consciousness and awareness level and connect
              deeply with the source (divine)
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/form");
            }}
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
