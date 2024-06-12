import React from "react";

export default function ChoosePlans() {
  return (
    <>
      <div className="pricing_section flex flex-col items-center justify-center mt-60">
        <h4 className="text-red-500 text-2xl">Pricing price</h4>
        <h1 className="text-4xl mt-6">Choose your plan</h1>
      </div>

      <div className="plans flex flex-row items-center justify-center mb-32 mt-8">
        <button className="px-8 py-3 bg-gray-100 text-gray-800 rounded-tl-full rounded-bl-full focus-within:bg-red-500 focus:text-white">
          Monthly
        </button>
        <button className="px-8 py-3 bg-gray-100 text-gray-800 rounded-tr-full rounded-br-full focus:bg-red-500 focus:text-white">
          Yearly
        </button>
      </div>

      <div className="box grid grid-cols-3 gap-7 ml-10 mr-10 mb-10">
        <div className="group">
          <div className="box-container border-2 border-dashed border-gray-500 group-hover:border-red-500 rounded-2xl ">
            <div className="w-fit m-auto block mt-10">
              <svg
                className="h-32 w-32 text-gray-800 hover:fill-none group-hover:text-red-500"
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
            <div className="mt-10 text-center">
              <h1 className="text-4xl mb-5 font-bold">$19.00</h1>
              <p>
                Lorem ipsum dolor sit am consetetur sadi <br />
                aliquyam erat sed diam voluptua vero eos <br />
                accusam et justo duo dolores
              </p>
              <button className="px-8 py-3 bg-red-100 rounded-lg text-gray-500 mt-5 text-center group-hover:bg-red-500 group-hover:text-gray- mb-10">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="box-container border-2 border-dashed border-gray-500 group-hover:border-red-500 rounded-2xl ">
            <div className="w-fit m-auto block mt-10">
              <svg
                className="h-32 w-32 text-gray-800 hover:fill-none group-hover:text-red-500"
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
            <div className="mt-10 text-center">
              <h1 className="text-4xl mb-5 font-bold">$19.00</h1>
              <p>
                Lorem ipsum dolor sit am consetetur sadi <br />
                aliquyam erat sed diam voluptua vero eos <br />
                accusam et justo duo dolores
              </p>
              <button className="px-8 py-3 bg-red-100 rounded-lg text-gray-500 mt-5 text-center group-hover:bg-red-500 group-hover:text-gray-50 mb-10">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="box-container border-2 border-dashed border-gray-500 group-hover:border-red-500 rounded-2xl ">
            <div className="w-fit m-auto block mt-10">
              <svg
                className="h-32 w-32 text-gray-800 hover:fill-none group-hover:text-red-500"
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
            <div className="mt-10 text-center">
              <h1 className="text-4xl mb-5 font-bold">$19.00</h1>
              <p>
                Lorem ipsum dolor sit am consetetur sadi <br />
                aliquyam erat sed diam voluptua vero eos <br />
                accusam et justo duo dolores
              </p>
              <button className="px-8 py-3 bg-red-100 rounded-lg text-gray-500 mt-5 text-center group-hover:bg-red-500 group-hover:text-gray-50 mb-10">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
