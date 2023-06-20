import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { Database } from "./firebase.js";

import mailchimp from "@mailchimp/mailchimp_transactional";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
const Form = ({ onCloseClick }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const dropdownRef = useRef();
  const textareaRef = useRef();
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [dropdownMessage, setDropdownMessage] = useState("");
  const [dropdownSelect, setdropdownSelect] = useState(false);
  const [dataSaved, setDataSaved] = useState(false);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyA9Kq_XhZh89CZvAnPAMZ4OKW76KXOq6-Y",

    authDomain: "lifecoach-bd893.firebaseapp.com",

    databaseURL:
      "https://lifecoach-bd893-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "lifecoach-bd893",

    storageBucket: "lifecoach-bd893.appspot.com",

    messagingSenderId: "946732431077",

    appId: "1:946732431077:web:db8114d7089b3be38d460c",

    measurementId: "G-BY1XN0486K",
  };

  const checkForValidation = (values) => {
    for (let key in values) {
      switch (key) {
        case "name":
          if (values[key] === "") {
            setNameMessage(`${key} must not be empty`);
            return false;
          }
          break;
        case "email":
          if (values[key] === "") {
            setEmailMessage(`${key} must not be empty`);
            return false;
          }
          break;
        case "phone":
          if (values[key] === "") {
            setPhoneMessage(`${key} must not be empty`);
            return false;
          } else if (isNaN(values[key]) || values[key].length !== 10) {
            setPhoneMessage(`Please enter a 10 digit number`);
            return false;
          }
          break;
        case "dropdown":
          if (values[key] === "Select an option") {
            setDropdownMessage(`Please select an option before submitting`);
            return false;
          }
          break;
        default:
          break;
      }
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      dropdown: dropdownRef.current.value,
      textarea: textareaRef.current.value,
    };
    if (checkForValidation(values)) {
      saveData(values);
      sendEmail(values);
    } else {
      return;
    }
  };

  const sendEmail = (values) => {
    setIsSendingEmail(true);
    const serviceId = "service_3j8guhy";
    const templateId = "template_qykhc0u";
    const userId = "8prKdgHp31s34fh3p";

    const template_params = {
      name: values.name,
      from_name: "Mabi",
      to_email: values.email,
      reply_to: "rajat@grammit.club",
      from_email: "rajat@grammit.club",
      message: "Hi this is Mabi! I think you are a next billionaire.",
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
        navigate("/");
      }
    );
  };

  const saveData = (values) => {
    fetch(
      "https://lifecoach-97e61-default-rtdb.firebaseio.com/contactForm.json",
      {
        // Enter your IP address here

        method: "POST",
        mode: "cors",
        body: JSON.stringify(values), // body data type must match "Content-Type" header
      }
    );
  };

  const handleInputChange = () => {
    setNameMessage("");
    setEmailMessage("");
    setDropdownMessage("");
    setPhoneMessage("");
  };
  const handleDropdownChange = (event) => {
    setdropdownSelect(true);
    handleInputChange(event);
  };
  const Success = () => {
    const navigate = useNavigate();
    const [redirectCounter, setredirectCounter] = useState(3);

    useEffect(() => {
      if (redirectCounter > 0) {
        setTimeout(() => {
          setredirectCounter(redirectCounter - 1);
        }, 1000);
      } else {
        navigate("/");
      }
    }, [redirectCounter]);

    return (
      <div className="flex items-center justify-center h-full min-h-screen bg-gray-200">
        <div className="card bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h2 className="block text-gray-700 text-3xl font-bold mb-2 text-center">
              Congratulations!
            </h2>
          </div>
          <p className="text-gray-700 text-lg text-center">
            You have successfully sent the message. You can also check the
            welcome email in your inbox. Looking forward to speaking to you
            soon!
          </p>
          <div className="flex items-center mt-6">
            <p className="text-red-500 ml-auto mr-auto text-lg flex flex-col font-bold">
              Redirecting you to the home page in{" "}
              <span className="text-3xl text-center font-bold">
                {redirectCounter}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ShowLoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            {/* SVG */}
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-center mt-4 space-x-3">
            {/* SVG */}
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  if (isSendingEmail) {
    return <ShowLoadingSpinner />;
  }

  if (successMessage) {
    return <Success />;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="card bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 card-image">
          <h2 className="card-heading">Let's Get Connected!</h2>
        </div>
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              ref={nameRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleInputChange}
            />
            <label
              className="block text-red-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              {nameMessage}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              ref={emailRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
            <label
              className="block text-red-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              {emailMessage}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              ref={phoneRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              onChange={handleInputChange}
            />
            <label
              className="block text-red-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              {phoneMessage}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dropdown"
            >
              Your concern<span className="text-red-500">*</span>
            </label>
            <select
              ref={dropdownRef}
              onChange={handleDropdownChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="dropdown"
            >
              <option value="" disabled={dropdownSelect} selected>
                Select an option
              </option>

              <option value="Option 1">Career</option>
              <option value="Option 2">Relationship</option>
              <option value="Option 3">Health</option>
              <option value="Option 3">Others</option>
            </select>
            <label
              className="block text-red-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              {dropdownMessage}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="textarea"
            >
              Your message
            </label>
            <textarea
              ref={textareaRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="textarea"
              placeholder="Enter your text here..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Get started
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={() => {
                navigate("/");
              }}
            >
              CLOSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
