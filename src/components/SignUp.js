import React from "react";
import { ReactComponent as Google } from "../assets/Google.svg";
import { ReactComponent as Apple } from "../assets/Apple.svg";

function SignUp() {
  return (
    <div>
      <form action="">
        <h3>Sign up with:</h3>
        <button className="bg-blue-600 py-2 px-5 flex items-center rounded">
          <Google className="w-4 h-4 flex" /> &nbsp; Google
        </button>
        <button className="bg-blue-600 py-2 px-5 flex items-center rounded ml-4">
          <Apple className="w-4 h-4 flex" />
          &nbsp; Apple
        </button>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button className="bg-blue-600 py-3 text-sm font-semibold rounded-full font-gilroy text-white hover:bg-blue-500">
          Sign up
        </button>
        <h2 className="font-gilroy py-4 mx-auto font-semibold">
          Already have an account?{" "}
          <a href="/#" className="text-blue-600">
            Log in
          </a>
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
