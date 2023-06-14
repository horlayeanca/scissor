import React from "react";
import { ReactComponent as Apple } from "../assets/Apple.svg";
import { ReactComponent as Google } from "../assets/Google.svg";
import { ReactComponent as VectorXX } from "../assets/VectorXX.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full h-[714px] bg-[#ffffff] flex justify-center">
      <div className="flex justify-center items-center flex-col w-1/2">
        <h3>Log in with:</h3>
        <div className="flex items-center font-gilroy text-white py-3">
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
        <form action="" className="flex flex-col py-2">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address or username"
            className="border-2 border-blue-600 rounded-lg w-[500px] py-2 px-4"
          />{" "}
          <br />
          <input
            type={showPassword ? "text" : "password"}
            name=""
            id=""
            placeholder="Password"
            className="border-2 border-blue-600 rounded-lg w-[500px] py-2 px-4"
          />
          {showPassword ? (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="absolute right-[450px] mt-[82px] cursor-pointer"
              onClick={togglePassword}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-[450px] mt-[82px] cursor-pointer"
              onClick={togglePassword}
            />
          )}
          <h2 className="font-gilroy text-right py-2 text-blue-600 hover:text-blue-500">
            <a href="/#">Forgot password ?</a>
          </h2>
          <button className="bg-blue-600 py-3 text-sm font-semibold rounded-full font-gilroy text-white hover:bg-blue-500">
            Log in
          </button>
          <h2 className="font-gilroy py-4 mx-auto font-semibold">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign up
            </Link>
          </h2>
          <div className="">
            <h3 className="font-gilroy text-sm text-slate-400 text-center">
              By signing in with an account, you agree to
            </h3>
            <h2 className="font-gilroy">
              <span className="text-slate-400"> Scissor's</span> Terms of
              Service, Privacy Policy{" "}
              <span className="text-slate-400"> and </span> Acceptable Use
              Policy.
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
