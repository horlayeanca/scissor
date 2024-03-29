import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as VectorIV } from "../assets/VectorIV.svg";
import { ReactComponent as VectorV } from "../assets/VectorV.svg";
import { ReactComponent as VectorVII } from "../assets/VectorVII.svg";
import { ReactComponent as VectorVIII } from "../assets/VectorVIII.svg";
import { ReactComponent as VectorIX } from "../assets/VectorIX.svg";
import { ReactComponent as VectorX } from "../assets/VectorX.svg";
import { useNavigate } from "react-router-dom";

function Shortner() {
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div
      name="Shortner"
      className="flex justify-center items-center bg-secondary py-20 px-8"
    >
      <VectorVIII className="absolute left-0 -mt-[194px] hidden lg:flex" />
      <VectorIX className="absolute left-0 -mt-[230px] hidden lg:flex" />
      <VectorX className="absolute left-0 -mt-[273px] hidden lg:flex" />
      <VectorIV className="absolute right-0 mt-[152px] hidden md:flex" />
      <VectorV className="absolute right-0 mt-[134px] hidden md:flex" />
      <VectorVII className="absolute right-0 mt-[80px] hidden md:flex" />
      <div className="border-2 rounded-xl flex flex-col justify-center items-center px-6 py-11 gap-5 w-full md:w-1/3 bg-white">
        <form
          action=""
          className="flex flex-col gap-4 w-full"
          onSubmit={handleClick}
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste URL here..."
            className="border-2 border-blue-200 rounded-xl w-full px-4 py-2 font-gilroy text-black focus:outline-blue-400"
          />
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <select
              type="select"
              className="border-2 border-blue-200 px-4 py-2 rounded-xl md:w-full font-gilroy text-sm text-blue-400 focus:outline-blue-400"
            >
              <option value="Customize">Customize domain</option>
              <option value="scissor.co">Scissor.com</option>
              <option value="Customize">Enter domain</option>
              <option value="Customize">Add domain</option>
              Customize domain
            </select>
            <input
              type="text"
              placeholder="Type Alias here"
              className="border-2 border-blue-200 px-3 py-2 rounded-xl md:w-full font-gilroy focus:outline-blue-400"
            />
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-600 py-2 w-full rounded-full text-white font-gilroy font-semibold text-sm hover:bg-blue-500 duration-200"
          >
            Trim URL &nbsp;{" "}
            <FontAwesomeIcon
              icon={faHandScissors}
              style={{ color: "#f4f5f5" }}
            />
          </button>
          <p className="text-center font-gilroy font-medium"></p>
          <p className="font-gilroy text-blue-500 text-sm font-medium text-center ">
            By clicking Trim URL, I agree to the{" "}
            <span className="font-bold text-base text-blue-600">
              {" "}
              Terms of Service, Privacy Policy
            </span>{" "}
            and use of Cookies.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Shortner;
