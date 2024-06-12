import React from "react";
import "../src/Component/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="flex flex-row bg-gray-500 py-48 mt-10 items-center justify-center">
        <div className="text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing autem quos.
            Architecto et suscipit explicabo
            <br />
            similique.
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <p className="mt-5">
            Company <br />
            Privacy Policy <br />
            About
          </p>
        </div>
        <div className="container3 text-white">
          <h1 className="font-bold text-2xl">Resources</h1>
          <p className="mt-5">
            Support <br />
            Contact <br />
            Terms
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            className="bg-white py-8 px-24 rounded-full border-gray-300 hover:border-red-400"
          />
        </div>
      </div>
      <div>
        <div className="content border-t-4 border-gray-100 bg-gray-500 pb-32">
          <svg
            className="h-8 w-8 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </div>
      </div>
    </>
  );
}
