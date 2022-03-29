import React from "react";
import LOGO from "../images/Logomark.svg";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-slateblue text-white px-20">
      <div className="flex text-2xl  ">
        <img className="mr-2 my-auto h-16" src={LOGO} alt="logo" />
        <div className="my-auto">Atlas Search Workshop</div>
      </div>
      <div className="flex text-4xl mr-20 text-springgreen font-noto">
        {" "}
        MongoDB .local Paris
      </div>
      <div className="flex text-2xl"> 5 Avril 2022</div>
    </div>
  );
};

export default Header;
