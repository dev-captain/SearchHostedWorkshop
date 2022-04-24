import React from "react";
import Karen from "../images/Karen1.png";
import Twitter from "../images/Twitterblue.png";

const Presenter = () => {
  return (
    <div className="flex mt-10 text-white px-8 text-lg pb-2">
      <img
        src={Karen}
        alt="search hero"
        className="mx-6 w-36 h-48 rounded-full"
      />
      <div className="flex flex-col pt-12">
        <div className="mt-6">
          Karen Huaulmé<br></br>Principal Developer Advocate
        </div>
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/youoldmaid"
          >
            {" "}
            <img src={Twitter} alt="twitter" className="w-12 object-contain" />
          </a>
          <div className="my-auto ml-2">@YouOldMaid</div>
        </div>
      </div>
    </div>
  );
};

export default Presenter;
