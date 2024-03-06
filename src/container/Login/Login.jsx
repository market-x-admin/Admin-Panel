import React, { useState } from "react";
import { loginApi } from "../../api/api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/actions/auth";
import "./login.css";
import { useNavigate , useLocation } from "react-router-dom";
import loginImg from "../.././assets/loginLogo.png";

const Login = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi(email, password);
      const { user, token } = response.data;

      const dataUser = dispatch(loginSuccess({ user, token }));
    const tokenAuth = dataUser?.token?.token
    console.log(tokenAuth)
      if(tokenAuth){
        navigate("/user_catalog");
        if (!tokenAuth && location.pathname === "/user_catalog") {
          // User is in /user_catalog without a token, redirect to /
          navigate("/");
        } else {
          // Redirect based on the token and location
          navigate(tokenAuth ? "/user_catalog" : "/");
        }
      }else{
        navigate("/")
      }
     
    } catch (error) {
      console.error("Login failed", error);
      console.error("Response data", error.response.data);
      alert("wrong Email and password") // Log the response data
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center w-full h-screen ">
          <img src={loginImg} alt="logo" className="w-72" />
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-start px-20">
          <div>
            <h4 className="text-2xl font-semibold text-gray-700">WellCome</h4>
            <h1 className="text-5xl font-semibold text-[#1ebbd7] mt-4">
              Login to Dashboard
            </h1>
          </div>
          <div className="mt-10 ">
            <form onSubmit={handleSubmit}>
              {/* <input 
        type='text'
        className='p-3'
        value={email}
        onChange={handleEmail}
        placeholder='please enter your email'
        autoComplete='new-password'
        /> */}
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    value={email}
                    onChange={handleEmail}
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Email
                  </label>
                </div>
              </div>
              <br />
              {/* <input
        type='password'
        className='p-3'
        value={password}
        onChange={handlePassword}
        placeholder='password'
        /> */}
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    password
                  </label>
                </div>
              </div>
              <br />
              <button
                className="w-72 bg-[#1ebbd7] py-2 text-white"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
