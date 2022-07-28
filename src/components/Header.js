import React from "react";
import LOGO from "../images/Logo_Spring-Green.png";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-slateblue text-white px-20">
      <div className="flex text-2xl">
        <img className=" my-auto py-2 h-16" src={LOGO} alt="logo" />
      </div>
      <div className="flex text-3xl text-white font-noto">
        {" "}
        Atlas Search Workshop
      </div>

      <div className="flex text-2xl"></div>
    </div>
  );
};

export default Header;
