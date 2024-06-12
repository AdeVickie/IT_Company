import React from "react";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-red-600 mt-16 font-bold text-3xl font-sans">
          About
        </h3>
        <h1 className="text-gray-700 text-4xl">Work Process</h1>
      </div>

      <div className="grid grid-cols-3 justify-center">
        <div className="single_services text-center mt-8 mx-16 h-84 border-dashed border-2 border-gray-400 hover:border-red-600 rounded-2xl">
          <div className="w-fit m-auto block">
            <svg
              className="h-32 w-32 text-gray-500 hover:fill-none hover:text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />{" "}
              <polyline points="17 21 17 13 7 13 7 21" />{" "}
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </div>
          <div className="services_content mt-5 ">
            <h3 className="services_title text-gray-500 font-semibold text-xl md:text-3xl">
              Research
            </h3>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadi
              <br /> aliquyam erat, sed diam voluptua. At vero eos
              <br /> accusam et justo duo dolores{" "}
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="single_services text-center mt-8 mx-16 h-84 border-dashed border-2 border-gray-400 hover:border-red-600 rounded-2xl">
            <div className="w-fit m-auto block ">
              <svg
                className="h-32 w-32 text-gray-500 hover:fill-none hover:text-red-500"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />{" "}
                <line x1="9.7" y1="17" x2="14.3" y2="17" />
              </svg>
            </div>
            <div className="services_content mt-5">
              <h3 className="services_title text-gray-500 font-semibold text-xl md:text-3xl">
                Prototype
              </h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consetetur sadi
                <br /> aliquyam erat, sed diam voluptua. At vero eos
                <br /> accusam et justo duo dolores{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="single_services text-center mt-8 mx-16 h-84 border-dashed border-2 border-gray-400 hover:border-red-600 rounded-2xl">
            <div className="w-fit m-auto block">
              <svg
                className="h-32 w-32 text-gray-500 hover:fill-none hover:text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="9 11 12 14 20 6" />{" "}
                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
              </svg>
            </div>
            <div className="services_content mt-5">
              <h3 className="services_title text-gray-500 font-semibold text-xl md:text-3xl">
                Build
              </h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consetetur sadi
                <br /> aliquyam erat, sed diam voluptua. At vero eos
                <br /> accusam et justo duo dolores{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
