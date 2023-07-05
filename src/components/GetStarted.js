import React from "react";
import { ReactComponent as VectorVIII } from "../assets/VectorVIII.svg";
import { ReactComponent as VectorIX } from "../assets/VectorIX.svg";
import { ReactComponent as VectorX } from "../assets/VectorX.svg";
import { ReactComponent as VectorXI } from "../assets/VectorXI.svg";
import { ReactComponent as VectorXII } from "../assets/VectorXII.svg";
import { ReactComponent as VectorXIII } from "../assets/VectorXIII.svg";

function GetStarted() {
  return (
    <div className="pt-20 w-full">
      <div className="bg-secondary">
        <VectorVIII className="hidden md:flex absolute -left-1" />
        <VectorIX className="hidden md:flex absolute -left-2" />
        <VectorX className="hidden md:flex absolute -left-1" />
        <div className="flex justify-center items-center flex-col h-96">
          <h1 className="font-gilroy-light text-xl md:text-4xl font-semibold text-white pb-10 text-center">
            Revolutionizing Link Optimization
          </h1>
          <button className="bg-primary py-3 px-10 rounded-full text-white font-gilroy font-normal text-base hover:bg-gradient-to-br from-green-300 to-blue-400 duration-300 hover:text-black ">
            Get Started
          </button>
          <div className="static">
            {" "}
            <VectorXI className="hidden md:flex absolute right-1 -mt-20" />
            <VectorXII className="hidden md:flex absolute right-2 -mt-7" />
            <VectorXIII className="hidden md:flex absolute mt-7 right-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
