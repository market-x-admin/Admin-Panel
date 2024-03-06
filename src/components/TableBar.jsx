import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Properties from "../Pages/Properties/Properties";
import Reviews from "../Pages/Reviews/Reviews";
import UserData from "../Pages/User catalog/UserData";
import { loginApi } from "../api/api";
import { loginSuccess } from "../store/actions/auth";
const TableBar = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };


  return (
    <div>
      <div className="flex space-x-4 justify-center items-center py-4 bg-[#f1fffe] rounded-lg mb-4 mx-4">
        <Link
          to="/user_catalog"
          className={`py-2 px-4 w-40 flex items-center justify-center  rounded-lg ${
            isLinkActive("/user_catalog")
              ? "bg-[#1ebbd7] text-white"
              : "bg-[#e4f2f1] text-black"
          }`}
          onClick={() => setActive("Users")}
        >
          Users
        </Link>
        <Link
          to="/properties"
          className={`py-2 px-4 w-40 flex items-center justify-center  rounded-lg ${
            isLinkActive("/properties")
              ? "bg-[#1ebbd7] text-white"
              : "bg-[#e4f2f1]  text-black"
          }`}
          onClick={() => setActive("Properties")}
        >
          Properties
        </Link>
       
      </div>
    </div>
  );
};

export default TableBar;
