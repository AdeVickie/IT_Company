import React from "react";

export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-red-600 mt-16 font-bold text-3xl font-sans">
          What We Do
        </h3>
        <h1 className="text-gray-700 text-4xl">Our Services</h1>
      </div>

      <div className="grid grid-cols-3 justify-center gap-7 ml-10 mr-10">
        <div className="group">
          <div className="single_services text-center mt-8 border-dashed border-2 border-gray-400 group-hover:border-red-600 rounded-2xl">
            <div className="w-fit m-auto block">
              <svg
                className="h-32 w-32 text-gray-500 group-hover:fill-none group-hover:text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
                <line x1="3" y1="9" x2="21" y2="9" />{" "}
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>

            <div className="services_content mt-8">
              <h3 className="services_title text-gray-500 font-semibold text-xl">
                We Design
              </h3>
              <p className="mt-4 text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consetetur sadi
                <br /> aliquyam erat, sed diam voluptua. At vero eos
                <br /> accusam et justo duo dolores{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="group">
            <div className="single_services text-center mt-8 mb-8 border-dashed border-2 border-gray-400 group-hover:border-red-600 rounded-2xl">
              <div className="w-fit m-auto block ">
                <svg
                  className="h-32 w-32 text-gray-500 group-hover:fill-none group-hover:text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <div className="services_content mt-8">
                <h3 className="services_title text-gray-500 font-semibold text-xl">
                  Digital Marketing
                </h3>
                <p className="mt-4 text-gray-500 mb-8">
                  Lorem ipsum dolor sit amet, consetetur sadi
                  <br /> aliquyam erat, sed diam voluptua. At vero eos
                  <br /> accusam et justo duo dolores{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="group">
            <div className="single_services text-center mt-8 border-dashed border-2 border-gray-400 group-hover:border-red-600 rounded-2xl">
              <div className="w-fit m-auto block">
                <svg
                  className="h-32 w-32 text-gray-500 group-hover:fill-none group-hover:text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />{" "}
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <div className="services_content mt-8">
                <h3 className="services_title text-gray-500 font-semibold text-xl">
                  Mobile Apps
                </h3>
                <p className="mt-4 text-gray-500 mb-8">
                  Lorem ipsum dolor sit amet, consetetur sadi
                  <br /> aliquyam erat, sed diam voluptua. At vero eos
                  <br /> accusam et justo duo dolores{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
