import React from "react";

export default function Navbar() {
  return (
    <div className="grid grid-cols-12 py-8 center gap-3 bg-white shadow-2xl shadow-slate-50 fixed z-20 w-screen">
      <div className="w-12 h-12 rounded-full bg-red-500 col-start-2"></div>
      <div className="col-start-5 text-end text-red-500 text-2xl">Home</div>
      <div className="text-end text-gray-800 hover:text-red-500 text-2xl ">
        About
      </div>
      <div className="text-gray-800 text-end hover:text-red-500 text-xl active:text-red-500">
        Services
      </div>
      <div className="text-gray-800 text-end hover:text-red-500 text-xl active:text-red-500">
        Projects
      </div>
      <div className="text-gray-800 text-end hover:text-red-500 text-xl active:text-red-500">
        Pricing
      </div>
      <div className="text-gray-800 text-end hover:text-red-500 text-xl active:text-red-500">
        Blog
      </div>
      <div className="text-gray-800 text-end hover:text-red-500 text-xl active:text-red-500">
        Contact
      </div>
    </div>
  );
}
