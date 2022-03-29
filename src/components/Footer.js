import React from "react";
import Karen from "../images/Karen1.png";
import Snehal from "../images/Snehal.png";
import Idriss from "../images/Idriss.jpeg";

import Twitter from "../images/Twitterblue.png";

const Footer = () => {
  return (
    <div className="flex justify-evenly px-20">
      <div className="flex mt-10 text-black px-8 text-lg pb-2">
        <img
          src={Idriss}
          alt="search hero"
          className="mx-6 w-48 h-48 rounded-full"
        />
        <div className="flex flex-col pt-12">
          <div className="mt-6">
            Idriss Ouazzani<br></br>Senior Solutions Architect
          </div>
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/youoldmaid"
            >
              {" "}
              <img
                src={Twitter}
                alt="twitter"
                className="w-12 object-contain"
              />
            </a>
            <div className="my-auto ml-2">@OuazzaniIdriss</div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 text-black px-8 text-lg pb-2">
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
              <img
                src={Twitter}
                alt="twitter"
                className="w-12 object-contain"
              />
            </a>
            <div className="my-auto ml-2">@YouOldMaid</div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 text-black px-8 text-lg pb-2">
        <img
          src={Snehal}
          alt="search hero"
          className="mx-6 w-48 h-48 rounded-full "
        />
        <div className="flex flex-col pt-12">
          <div className="mt-6">
            Snehal Bhatia<br></br>Solutions Architect
          </div>
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/youoldmaid"
            >
              {" "}
              <img
                src={Twitter}
                alt="twitter"
                className="w-12 object-contain"
              />
            </a>
            <div className="my-auto ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
