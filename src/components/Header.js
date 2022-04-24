import React from "react";
import LOGO from "../images/Logomark.svg";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-slateblue text-white px-20">
      <div className="flex text-2xl  ">
        <img className="mr-2 my-auto h-16" src={LOGO} alt="logo" />
        <div className="my-auto">Atlas Search Workshop </div>
      </div>
      <div className="flex text-3xl text-springgreen font-noto">
        {" "}
        MongoDB World 2022
      </div>

      <div className="flex text-2xl"> New York, June 7-9</div>
    </div>
  );
};

export default Header;
