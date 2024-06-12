import React from "react";
import Team1 from "../src/assets/Images/Team1.jpg";
import Team2 from "../src/assets/Images/Team2.jpg";
import Team3 from "../src/assets/Images/Team3.jpg";

export default function Team() {
  return (
    <>
      <div className="grid grid-cols-6 bg-gray-200 pt-32 pb-32 shadow-gray-900 gap-2 ">
        <div className="card-container bg-white shadow-lg rounded-lg ml-5 group group-hover:bg-red-500">
          <img className="w-fit rounded-lg" src={Team1} alt="A boy" />
          <div className="card-items h-24 ml-5 mt-5">
            <h1 className="font-bold text-3xl group-hover:text-white">
              Rob Hope
            </h1>
            <p className="mt-3 group-hover:text-white">Dr. Software Engineer</p>
          </div>
        </div>

        <div className="grid-container bg-white shadow-lg rounded-lg">
          <img className="w-fit rounded-lg" src={Team2} alt="A boy" />
          <div className="card-items h-24 ml-5 mt-5">
            <h1 className="font-bold text-3xl">Micheal Jordan</h1>
            <p className="mt-3">Business Development Manager</p>
          </div>
        </div>

        <div className="grid-container bg-white shadow-lg rounded-lg">
          <img className="w-fit rounded-lg" src={Team3} alt="A boy" />
          <div className="card-items h-24 ml-5 mt-5">
            <h1 className="font-bold text-3xl">Micheal Jordan</h1>
            <p className="mt-3">Business Development Manager</p>
          </div>
        </div>

        <div className="card-container bg-white shadow-lg rounded-lg ">
          <img className="w-fit rounded-lg" src={Team1} alt="A boy" />
          <div className="card-items h-24 ml-5 mt-5">
            <h1 className="font-bold text-3xl">Rob Hope</h1>
            <p className="mt-3">Dr. Software Engineer</p>
          </div>
        </div>

        <div className="grid-container bg-white shadow-lg rounded-lg">
          <img className="w-fit rounded-lg" src={Team2} alt="A boy" />
          <div className="card-items h-24 ml-5 mt-5">
            <h1 className="font-bold text-3xl">Micheal Jordan</h1>
            <p className="mt-3">Business Development Manager</p>
          </div>
        </div>

        <div className="grid-container bg-white shadow-lg rounded-lg mr-5 overflow-hidden">
          <img className="w-fit rounded-lg" src={Team3} alt="A boy" />
          <div className="card-items h-24 ml-5 mt-5">
            <h1 className="font-bold text-3xl">Micheal Jordan</h1>
            <p className="mt-3">Business Development Manager</p>
          </div>
        </div>
      </div>
    </>
  );
}
