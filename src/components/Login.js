import React from "react";
import { ReactComponent as Apple } from "../assets/Apple.svg";
import { ReactComponent as Google } from "../assets/Google.svg";
import { ReactComponent as VectorXX } from "../assets/VectorXX.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="w-full h-[714px] bg-[#ffffff] flex justify-center">
      <div className="flex justify-center items-center flex-col border-2 border-black w-1/2">
        <h3>Log in with:</h3>
        <div className="flex items-center border-2 border-red-300 font-gilroy text-white">
          <button className="bg-blue-600 py-2 px-5 flex items-center rounded">
            <Google className="w-4 h-4 flex" /> &nbsp; Google
          </button>
          <button className="bg-blue-600 py-2 px-5 flex items-center rounded ml-4">
            <Apple className="w-4 h-4 flex" />
            &nbsp; Apple
          </button>
        </div>
        <div className="flex flex-row items-center">
          <VectorXX /> <h2>&nbsp; Or &nbsp;</h2>
          <VectorXX />
        </div>
        <form action="" className="flex flex-col">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address or username"
            className="border-2 border-blue-600 rounded-lg w-[450px] py-2 px-4"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="border-2 border-blue-600 rounded-lg w-[450px] py-2 px-4"
          />
          <FontAwesomeIcon icon={faEyeSlash} />
          <FontAwesomeIcon icon={faEye} />
          <h2>Forgot password ?</h2>
          <button className="bg-blue-600 py-2 rounded-full">Log in</button>
          <h2>
            Don't have an account? <a href="/#">Sign up</a>
          </h2>
          <div>
            <h3>By signing in with an account, you agree to</h3>
            <h2>
              Scissor's Terms of Service, Privacy Policy and Acceptable Use
              Policy.
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
