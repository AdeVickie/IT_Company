import React from "react";
import choose from "../assets/Images/chooseUs.jpg";

export default function ChooseUs() {
  return (
    <>
      <div className="grid grid-cols-2 mt-32 justify-center gap-16  ">
        <div>
          <img src={choose} alt="animations" />
        </div>
        <div className="mt-32">
          <h3 className="text-red-500 text-2xl font-bold">Why Choose Us</h3>
          <h1 className="text-gray-700 text-3xl font-bold mt-6">
            Your Goal is Our Achievement
          </h1>
          <p className="text-gray-500 mt-8">
            {" "}
            Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat sed diam
            <br /> voluptua. At vero eos et accusam et justo duo dolores et
            rebum. Stet clita kasd <br /> gubergren, no sea takimata sanctus.
          </p>
          <ul>
            <li className="flex text-gray-500 mt-8">
              <svg
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-6">
                Vero eos et accusam et justo duo dolores et rebum. Stet clita{" "}
                <br /> gubergrenv
              </p>
            </li>

            <li className="flex text-gray-500 mt-8">
              <svg
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-6">
                At vero eos et accusam et justo duo dolores et rebum. Stet clita{" "}
                <br />
                kasd gubergrenv
              </p>
            </li>
            <li className="flex text-gray-500 mt-8">
              <svg
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-6">
                Dvero eos et accusam et justo duo dolores et rebum. Stet clita
                kasd <br /> gubergrenv
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
