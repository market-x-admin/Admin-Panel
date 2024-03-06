import React, { useState } from "react";
import Search from "./Search";

const SubNavbar = ({ downButton }) => {
  return (
    <div className="">
      <div className="mb-4 mx-4 p-2 pr-6 rounded-lg bg-white flex justify-between items-center">
        {/* <Search/> */}
        <div>{downButton()}</div>
      </div>
    </div>
  );
};

export default SubNavbar;
