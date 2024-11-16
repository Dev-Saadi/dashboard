import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-gradient-to-r from-whitegrey via-offwhite to-whitegrey">
      <div className="w-2/6 p-2">
        <div className="bg-offwhite p-4 rounded-md">
          <div className="border-b-2 border-hazel mb-3">
            <h2 className="text-2xl text-ash  font-poppins font-semibold mb-2">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-brightRed via-navy to-lightPurple text-transparent bg-clip-text">
                Hawker
              </span>
            </h2>
          </div>
          <div className="border-b-2 border-hazel">
            <p className="text-base mb-2 font-poppins font-medium">
              Create account.
            </p>
          </div>
          <form action="">
            <div className="flex flex-col w-full gap-1 mb-3">
              <label
                className="text-sm mt-3 font-montserrat font-semibold"
                htmlFor="name"
              >
                User Name
              </label>
              <input
                className="p-2 text-base font-hostgrotesk outline-none border border-whitegrey bg-transparent rounded-md "
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mt-5">
              <label
                className="text-sm font-montserrat font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
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
              <label htmlFor="chekcbox" className="text-sm font-montserrat">
                By creating an account, you agree to Hawker's{" "}
                <Link className="underline text-blue-600">
                  Conditions of Use
                </Link>{" "}
                and{" "}
                <Link className="underline text-blue-600">Privacy Notice.</Link>
              </label>
            </div>

            <button className="w-full text-base font-montserrat text-offwhite font-semibold bg-ash rounded-md mt-5 hover:bg-offBlack transition-all ease-linear duration-200 p-3">
              Sign Up
            </button>

            <div className="flex items-center justify-center mt-3">
              <p className="font-poppins font-medium text-offBlack text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-poppins font-semibold text-sm hover:underline hover:text-brightRed"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mt-2">
              <div className="w-[45%] bg-ash h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1 font-poppins text-sm font-semibold">
                  Or
                </span>
              </div>
              <div className="w-[45%] bg-ash h-[1px]"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
