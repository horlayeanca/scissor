import React, { useEffect } from "react";
import { ReactComponent as VectorXX } from "../assets/VectorXX.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const history = useHistory();

  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn(auth);
      console.log("Google Sign In Successful");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      history.push("/");
    } else {
      history.push("/signup");
    }
  }, [user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupForm = document.querySelector("form");

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        // Signed in
        const user = cred.user;
        alert("User created successfully!", user);
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
    <div className="w-full h-[714px] bg-[#ffffff] flex justify-center">
      <div className="flex flex-col justify-center items-center py-10 w-2/3">
        <h3 className="text-center p-3 font-gilroy text-base text-[#5C6F7F]">
          Sign up with:
        </h3>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="bg-blue-600 py-2 px-5 font-gilroy text-sm text-white flex items-center rounded flex-nowrap"
          >
            <FcGoogle className="w-4 h-4 flex text-2xl" /> &nbsp; Google
          </button>
          <button className="bg-blue-600 py-2 px-5 font-gilroy text-sm text-white flex items-center rounded flex-nowrap ml-4">
            <AiFillApple className="w-4 h-4 flex text-white text-4xl" />
            &nbsp; Apple
          </button>
        </div>
        <div className="flex flex-row justify-center items-center py-3 w-full sm:w-2/3">
          <VectorXX /> <h2>&nbsp; Or &nbsp;</h2>
          <VectorXX />
        </div>
        <form
          action=""
          name="form"
          id="form"
          className="flex flex-col justify-center sm:w-2/3"
        >
          <div className="flex flex-col gap-4 justify-center">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="border-2 border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="border-2 border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
            />
            <div className="border-2 border-blue-600 rounded-lg w-full flex justify-between items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="py-2 px-4 outline-none border-l-2 rounded-lg"
              />
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="cursor-pointer pr-3"
                  onClick={togglePassword}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="cursor-pointer pr-3"
                  onClick={togglePassword}
                />
              )}
            </div>
            <div className="border-2 border-blue-600 rounded-lg w-full flex justify-between items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                id="confirmPassword"
                className="py-2 px-4 outline-none border-l-2 rounded-lg"
              />
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="cursor-pointer pr-3"
                  onClick={togglePassword}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="cursor-pointer pr-3"
                  onClick={togglePassword}
                />
              )}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 mt-5 py-3 text-sm font-semibold rounded-full font-gilroy text-white hover:bg-blue-500"
          >
            Sign up with Email
          </button>

          <h2 className="font-gilroy py-4 mx-auto font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Log in
            </Link>
          </h2>
          <h3 className="font-gilroy text-sm text-slate-400 text-center">
            By signing up with an account, you agree to
          </h3>
          <h2 className="font-gilroy text-center">
            <span className="text-slate-400"> Scissor's</span> Terms of Service,
            Privacy Policy{" "}
            <span className="text-slate-400 text-center"> and </span> Acceptable
            Use Policy.
          </h2>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
