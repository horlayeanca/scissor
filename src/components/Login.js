import React from "react";

function Login() {
  return (
    <div className="w-full h-[714px] bg-[#ffffff] flex justify-center">
      <div className="flex justify-center items-center flex-col">
        <h3>Log in with:</h3>
        <div className="flex items-center">
          <button className="bg-blue-600 py-2 px-5 ">Google</button>
          <button className="bg-blue-600 py-2 px-5 ">Apple</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
