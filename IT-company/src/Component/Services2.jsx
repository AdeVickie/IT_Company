import React from "react";

export default function ServicesTwo() {
  return (
    <>
      <div className="grid grid-cols-3 justify-center ml-10 mr-10 gap-7">
        <div className="group">
          <div className="single_services text-center mt-8 border-dashed border-2 border-gray-400 group-hover:border-red-600 rounded-2xl">
            <div className="w-fit m-auto block">
              <svg
                class="h-32 w-32 text-gray-500 group-hover:fill-none group-hover:text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="services_content mt-8">
              <h3 className="services_title text-gray-500 font-semibold text-xl">
                SEO Consultancy
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
            <div className="single_services text-center mt-8 border-dashed border-2 border-gray-400 group-hover:border-red-600 rounded-2xl">
              <div className="w-fit m-auto block ">
                <svg
                  class="h-32 w-32 text-gray-500 group-hover:fill-none group-hover:text-red-500 "
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
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />{" "}
                  <polyline points="4 12 12 16 20 12" />{" "}
                  <polyline points="4 16 12 20 20 16" />
                </svg>
              </div>
              <div className="services_content mt-8">
                <h3 className="services_title text-gray-500 font-semibold text-xl">
                  Graphic Design
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
                  class="h-32 w-32 text-gray-500 group-hover:fill-none group-hover:text-red-500"
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
                  <rect x="3" y="7" width="18" height="13" rx="2" />{" "}
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />{" "}
                  <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <div className="services_content mt-8">
                <h3 className="services_title text-gray-500 font-semibold text-xl">
                  Business Consultancy
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
