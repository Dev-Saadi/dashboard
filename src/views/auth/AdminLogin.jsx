import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hw from "../../assets/Images/Hw.svg";
import Img from "../../assets/Images/Img";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/reducers/authReducer";

const AdminLogin = () => {
  let dispatch = useDispatch();

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
    dispatch(admin_login(logInputvalue));
  };
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-gradient-to-t from-magenta from-10% to-skyblue to-95%">
      <div className="w-[540px] p-2">
        <div className="bg-offwhite p-10 rounded-lg">
          <div className="border-b-2 border-lineColor mb-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-ash font-bold mb-2">Admin</h2>
              <span>
                <Img width={144} src={Hw} />
              </span>
            </div>
          </div>
          <div className="border-b-2 border-lineColor">
            <p className="text-base mb-2 font-poppins font-medium">
              Log into your admin account.
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

            <button className="w-full text-base font-montserrat text-offwhite font-semibold bg-ash rounded-md mt-5 hover:bg-offBlack transition-all ease-linear duration-200 p-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
