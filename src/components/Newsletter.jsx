import React from "react";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const Newsletter = () => {
  const emailRef = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      email: emailRef.current.value,
    };

    saveData(values);
    sendEmail(values);
  };

  const sendEmail = (values) => {
    setIsSendingEmail(true);
    const serviceId = "service_3j8guhy";
    const templateId = "template_zdd6c2u";
    const userId = "8prKdgHp31s34fh3p";

    const template_params = {
      to_email: values.email,
      from_email: "triprjt@gmail.com",
      reply_to: "triprjt@gmail.com",
    };
    emailjs.send(serviceId, templateId, template_params, userId).then(
      (result) => {
        console.log("Success");
        setIsSendingEmail(false);
        setSuccessMessage(true);
      },
      (error) => {
        console.log("Failed!");

        alert("Due to some reason message failed. Please try again later");
        setIsSendingEmail(false);
        setSuccessMessage(false);
      }
    );
  };

  const saveData = (values) => {
    fetch(
      "https://lifecoach-97e61-default-rtdb.firebaseio.com/newsletterEmails.json",
      {
        // Enter your IP address here

        method: "POST",
        mode: "cors",
        body: JSON.stringify(values), // body data type must match "Content-Type" header
      }
    );
  };
  const showloading = () => {
    return (
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-16 text-black px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to be the best version of yourself?
          </h1>
          <p className="text-slate-500">
            Sign up to my newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          {isSendingEmail ? (
            showloading()
          ) : successMessage ? (
            <div className="text-center text-green-600 font-bold mb-4">
              Thank you for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
              />
              <button
                onClick={handleSubmit}
                className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              >
                Notify Me
              </button>
            </div>
          )}
          <p className=" flex fon-xs text-gray-400 flex-col">
            I care about the protection of your data{""}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
