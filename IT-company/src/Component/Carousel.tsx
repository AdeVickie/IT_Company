import React from "react";
import marketing from "../assets/Images/marketing.jpg";
import analysis from "../assets/Images/analysis.jpg";
import creativeDesign from "../assets/Images/creative Design.jpg";
import SMM from "../assets/Images/SMM.jpg";
import webDesign from "../assets/Images/web design.jpg";

export default function Carousel() {
  return (
    <>
      <div id="default-carousel" data-carousel="static">
        <div className="grid grid-cols-5 mt-16 ml-8 mb-10 gap-5 mr-8">
          <div
            className="card-container shadow-lg shadow-gray-400 rounded-lg duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              className="w-full rounded-lg"
              src={marketing}
              alt="marketing"
            />
            <div className="h-24">
              <div className="font-bold text-2xl text-gray-700 mt-10 ml-6">
                Marketing
              </div>
              <p className="text-gray-700 mt-5 ml-6">NoCodeAPI</p>
            </div>
          </div>

          <div
            className="card-container shadow-lg shadow-gray-400 rounded-lg duration-700 ease-in-out"
            data-carousel-item
          >
            <img className="w-full rounded-lg" src={analysis} alt="analysis" />
            <div className="h-24">
              <div className="font-bold text-2xl text-gray-700 mt-10 ml-6">
                Analysis
              </div>
              <p className="text-gray-700 mt-5 ml-6">NoCodeAPI</p>
            </div>
          </div>

          <div className="card-container shadow-lg shadow-gray-400 rounded-lg">
            <img
              className="w-full rounded-lg"
              src={creativeDesign}
              alt="creative design"
            />
            <div className="h-24">
              <div className="font-bold text-2xl text-gray-700 mt-10 ml-6">
                Creative Design
              </div>
              <p className="text-gray-700 mt-5 ml-6">NoCodeAPI</p>
            </div>
          </div>

          <div className="card-container shadow-lg shadow-gray-400 rounded-lg">
            <img className="w-full rounded-lg" src={SMM} alt="SMM" />
            <div className="h-24">
              <div className="font-bold text-2xl text-gray-700 mt-10 ml-6">
                SMM
              </div>
              <p className="text-gray-700 mt-5 ml-6">NoCodeAPI</p>
            </div>
          </div>

          <div className="card-container shadow-lg shadow-gray-400 rounded-lg">
            <img
              className="w-full rounded-lg"
              src={webDesign}
              alt="web design"
            />
            <div className="h-24">
              <div className="font-bold text-2xl text-gray-700 mt-10 ml-6">
                Web Design
              </div>
              <p className="text-gray-700 mt-5 ml-6">NoCodeAPI</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
