import React from "react";
import logoImg from "../assets/loginLogo.png";
import userImg from "../assets/user.png";
import TableBar from "./TableBar";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const logoutConfirmed = window.confirm("Are you sure you want to logout?");
    if (logoutConfirmed) {
      navigate("/");
    }
  };
  return (
    <div className="w-full flex flex-col">
      <div className="flex">
        <div className="flex w-1/2 justify-start p-8 bg-[#f1fffe] m-4 rounded-lg">
          <img src={userImg} alt="user" />
          <div className="ml-6 mt-2">
            <p className="uppercase text-[#1ebbd7] font-semibold">admin</p>
            <p className="text-gray-500">admin@beetkom.com</p>
            <p onClick={handleLogout} className="text-gray-500 cursor-pointer	">
              Logout
            </p>
          </div>
        </div>
        <div className="flex w-1/2 justify-start p-10 bg-[#f1fffe] m-4 rounded-lg">
          <img className="w-44" src={logoImg} alt="logo" />
        </div>
      </div>
      <TableBar />
    </div>
  );
};

export default Users;
