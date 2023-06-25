import React from "react";
import { ReactComponent as VectorXX } from "../assets/VectorXX.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../context/AuthContext";
import { auth } from "./firebase";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn(auth);
      console.log("Google Sign In Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[714px] bg-[#ffffff] flex justify-center">
      <div className="flex justify-center items-center flex-col w-1/2">
        <h3>Log in with:</h3>
        <div className="flex items-center font-gilroy text-white py-3">
          <button
            onClick={handleGoogleSignIn}
            className="bg-blue-600 py-2 px-5 flex items-center rounded"
          >
            <FcGoogle className="w-4 h-4 flex text-2xl" /> &nbsp; Google
          </button>
          <button className="bg-blue-600 py-2 px-5 flex items-center rounded ml-4">
            <AiFillApple className="w-4 h-4 flex text-white text-4xl" />
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
            className="border-2 border-blue-600 rounded-lg md:w-[500px] py-2 px-4"
          />{" "}
          <br />
          <div className="border-2 border-blue-600 rounded-lg">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              placeholder="Password"
              className=" md:w-[450px] py-2 px-4 outline-none border-l-2 rounded-lg"
            />
            {showPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className="cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </div>
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
