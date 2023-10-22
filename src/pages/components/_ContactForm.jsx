"use client";

import React, { useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import Header from "./_Header";
import Footer from "./_Footer";
import { isValidEmail } from "../utilityFuncs/isValidEmail";

const Contact = () => {



  const [formState, setFormState] = useState({});
  const form = useRef();

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formState.from_email)
    if(!isValidEmail(formState.from_email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    emailjs.sendForm('service_cxkz62p', 'template_dt9x0ki', form.current, 'vQxtVpTCvIziyvN_v')
      .then((result) => {
          alert("Email Sent Succesfully");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <>
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-neutral-900 shadow-lg p-6">
            <div className="container my-14 mx-auto p-4 text-center">
              <h1 className="text-2xl font-bold mb-4 text-white">Contact Us</h1>
              <form className="text-gray-400 max-w-md mx-auto" ref={form} onSubmit={sendEmail}>
                <div className="mb-4 ">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formState.from_name || ""}
                    onChange={changeHandler}
                    className="text-black mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value = {formState.from_email || ""}
                    onChange={changeHandler}  
                    className="mt-1 p-2 block w-full rounded-md text-black border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.body}
                    onChange={changeHandler}
                    className="text-black mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                  ></textarea>
                </div>
                   {/* This is a comment 
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium"
                  >
                    Upload Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>*/}
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-800 hover:text-white duration-300 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
