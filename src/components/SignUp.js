import React from "react";
import { ReactComponent as VectorXX } from "../assets/VectorXX.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupForm = document.querySelector("form");

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        // Signed in
        const user = cred.user;
        alert("User created successfully!", user.cred);
        signupForm.reset();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        // ..
      });
  };
  return (
    <div className="flex justify-center items-center py-10">
      <form action="" name="form" className="flex flex-col">
        <h3 className="text-center p-3 font-gilroy text-base text-[#5C6F7F]">
          Sign up with:
        </h3>
        <div className="flex justify-center">
          <button className="bg-blue-600 py-2 px-5 font-gilroy text-sm text-white flex items-center rounded">
            <FcGoogle className="w-4 h-4 flex text-2xl" /> &nbsp; Google
          </button>
          <button className="bg-blue-600 py-2 px-5 font-gilroy text-sm text-white flex items-center rounded ml-4">
            <AiFillApple className="w-4 h-4 flex text-white text-4xl" />
            &nbsp; Apple
          </button>
        </div>
        <div className="flex flex-row justify-center items-center py-3">
          <VectorXX /> <h2>&nbsp; Or &nbsp;</h2>
          <VectorXX />
        </div>
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border-2 border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="border-2 border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="border-2 border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
          />
          {showPassword ? (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="absolute right-[450px] mt-[195px] cursor-pointer"
              onClick={togglePassword}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-[450px] mt-[195px] cursor-pointer"
              onClick={togglePassword}
            />
          )}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="border-2 border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
          />
          {showPassword ? (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="absolute right-[450px] mt-[136px] cursor-pointer"
              onClick={togglePassword}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-[450px] mt-[136px] cursor-pointer"
              onClick={togglePassword}
            />
          )}

          <button
            onClick={handleSubmit}
            className="bg-blue-600 mt-5 py-3 text-sm font-semibold rounded-full font-gilroy text-white hover:bg-blue-500"
          >
            Sign up with Email
          </button>
        </div>
        <h2 className="font-gilroy py-4 mx-auto font-semibold">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Log in
          </Link>
        </h2>
        <h3 className="font-gilroy text-sm text-slate-400 text-center">
          By signing up with an account, you agree to
        </h3>
        <h2 className="font-gilroy">
          <span className="text-slate-400"> Scissor's</span> Terms of Service,
          Privacy Policy <span className="text-slate-400"> and </span>{" "}
          Acceptable Use Policy.
        </h2>
      </form>
    </div>
  );
}

export default SignUp;
