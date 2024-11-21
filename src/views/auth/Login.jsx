import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgGoogle } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  let [logInputvalue, setlogInputvalue] = useState({
    email: "",
    password: "",
  });

  let handleInputValue = (event) => {
    setlogInputvalue({
      ...logInputvalue,
      [event.target.name]: event.target.value,
    });
    console.log(logInputvalue);
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(logInputvalue);
  };

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-gradient-to-t from-magenta from-10% to-skyblue to-95%">
      <div className="w-[540px] p-2">
        <div className="bg-offwhite p-10 rounded-lg">
          <div className="border-b-2 border-lineColor mb-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-ash font-bold mb-2">Welcome to</h2>
              <span>
                <img className="w-36" src="src/assets/Images/Hw.svg" />
              </span>
            </div>
          </div>
          <div className="border-b-2 border-lineColor">
            <p className="text-base mb-2 font-poppins font-medium">
              Log into your account.
            </p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col w-full gap-1 mt-5">
              <label
                className="text-sm font-montserrat font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={handleInputValue}
                className="p-2 text-base font-hostgrotesk outline-none border border-whitegrey bg-transparent rounded-md"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mt-5">
              <label
                className="text-sm font-montserrat font-semibold"
                htmlFor="email"
              >
                Password
              </label>
              <input
                onChange={handleInputValue}
                className="p-2 text-base font-hostgrotesk outline-none border border-whitegrey bg-transparent rounded-md"
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex  items-center w-full gap-3 mt-3">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 rounded border border-ash focus:ring-black"
              />
              <label
                htmlFor="chekcbox"
                className="text-xs text-ash font-medium font-montserrat"
              >
                By continuing, you agree to Hawker's{" "}
                <Link className="underline text-blue-600">
                  Conditions of Use
                </Link>{" "}
                and{" "}
                <Link className="underline text-blue-600">Privacy Notice.</Link>
              </label>
            </div>

            <button className="w-full text-base font-montserrat text-offwhite font-semibold bg-ash rounded-md mt-5 hover:bg-offBlack transition-all ease-linear duration-200 p-3">
              Sign In
            </button>

            <div className="flex items-center justify-center mt-3">
              <p className="font-poppins font-medium text-offBlack text-sm">
                Don't have an account?{" "}
                <Link
                  to="/registration"
                  className="font-poppins font-semibold text-sm hover:underline hover:text-brightRed"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
          <div className="w-full flex justify-center items-center mt-2">
            <div className="w-[45%] bg-borderColor h-[1px]"></div>
            <div className="w-[10%] flex justify-center items-center">
              <span className="pb-1 font-poppins text-sm font-semibold">
                Or
              </span>
            </div>
            <div className="w-[45%] bg-borderColor h-[1px]"></div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center rounded-lg items-center w-8 h-8 bg-whitegrey hover:bg-red-600 hover:text-white transition-all ease-linear duration-150 cursor-pointer">
              <CgGoogle />
            </div>
            <div className="flex justify-center rounded-lg items-center w-8 h-8 bg-whitegrey hover:bg-blue-600 hover:text-white transition-all ease-linear duration-150 cursor-pointer">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
