import React from "react";
import contact1 from "../src/assets/Images/contact.jpg";

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-5  gap-8 mt-32">
        <div className="container col-span-2">
          <img src={contact1} alt="contact" />
        </div>
        <div className="container col-span-2">
          <p className="text-red-500 text-2xl">Contact</p>
          <h1 className="text-gray-600 font-bold text-5xl mt-5">
            Get in Touch
          </h1>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr sed diam
            nonumy eirmod
            <br /> tempor invidunt ut labore et dolore magna.
          </p>

          <form action="#">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-400 py-2 mt-5"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-400 py-2 mt-5"
              />
            </div>
            <input
              type="text"
              placeholder="Message"
              className="py-12 w-full border border-gray-400 mt-5"
            />
          </form>
          <button className="py-5 px-12 mt-8 rounded-lg text-white bg-red-500 hover:bg-red-200">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
