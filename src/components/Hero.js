import React from "react";
import { ReactComponent as Vector } from "../assets/Vector.svg";
import { ReactComponent as Ellipse } from "../assets/Ellipse.svg";
import { ReactComponent as Frame } from "../assets/Frame.svg";
import { ReactComponent as Rectangle } from "../assets/Rectangle.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gradient-to-b w-full from-yellow-50 to-slate-200 bg-blend-multiply">
      <div className="flex flex-col h-60 px-3 mb-10 justify-center items-center">
        <div className="mt-[325px] w-3/4">
          <p className="text-lg w-full md:max-w-4xl sm:text-3xl lg:text-5xl mx-auto text-center leading-relaxed font-gilroy-light font-bold">
            Optimize Your Online Experience with Our Advanced{" "}
            <span className="text-blue-600 leading-3">URL Shortening </span>{" "}
            Solution
            <span className="text-blue-600 hidden sm:flex">
              <svg
                width="160"
                height="21"
                viewBox="0 0 174 21"
                fill="none"
                className="mx-auto w-1/6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M162.517 0.904968C75.1007 1.58327 17.7488 11.4833 0 16.3485L9.28502 15.694L2.32125 17.9692L10.2135 17.6848L6.03526 19.3912L12.0705 20.8132C52.0748 16.4527 149.09 6.64053 173.63 5.23864L155.524 4.88662C165.556 3.55424 166.666 3.6068 166.666 3.6068C166.666 3.6068 162.517 2.61139 162.517 0.904968Z"
                  fill="#005AE2"
                />
              </svg>
            </span>
          </p>
          <div className="mx-auto w-full py-3 flex md:w-3/4">
            <p className="text-center text-sm md:text-lg w-full pb-10 leading-6 px-2 sm:px-10 font-gilroy">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              option to reinforce your brand presence and enhance user
              engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-52 gap-8">
        <Link
          to="/signup"
          className="bg-blue-600 py-2 px-4 text-sm md:text-base md:py-3 md:px-8 rounded-full font-gilroy text-white cursor-pointer hover:bg-blue-500 duration-200"
        >
          Sign Up
        </Link>
        <button className="text-blue-600 cursor-pointer hover:scale-100 duration-200 hover:text-red-600">
          Learn more..
        </button>
      </div>
      <div className="flex w-4/6 md:w-full mx-auto sm:my-6 py-3 pl-8">
        <Vector className="relative left-16 h-60 hidden md:block lg:left-[240px]" />
        <Frame className="flex items-center pt-3 md:absolute left-1/3 justify-center" />
      </div>
      <div className="hidden sm:flex w-full">
        <Rectangle className="w-full h-24" />
        <Ellipse className="absolute justify-center items-center w-full mt-4" />
      </div>
    </div>
  );
}

export default Hero;
