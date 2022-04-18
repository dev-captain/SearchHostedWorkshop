import React from "react";
import Karen from "../images/Karen1.png";
import Rick from "../images/Rick.png";
import Chai from "../images/Chai.jpeg";

import Twitter from "../images/Twitterblue.png";

const Footer = () => {
  return (
    <div className="flex justify-evenly px-20">
      <div className="flex mt-10 text-black px-8 text-lg pb-2">
        <img
          src={Chai}
          alt="search hero"
          className="mx-6 w-48 h-48 rounded-full"
        />
        <div className="flex flex-col pt-12">
          <div className="mt-6">
            Chaitanya Varanasi<br></br>Senior Solutions Architect
          </div>
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/trychai"
            >
              {" "}
              <img
                src={Twitter}
                alt="twitter"
                className="w-12 object-contain"
              />
            </a>
            <div className="my-auto ml-2">@tryChai</div>
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
          src={Rick}
          alt="search hero"
          className="mx-6 w-48 h-48 rounded-full "
        />
        <div className="flex flex-col pt-12">
          <div className="mt-6">
            Rick Houlihan<br></br>Director, Developer Relations
          </div>
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/houlihan_rick"
            >
              {" "}
              <img
                src={Twitter}
                alt="twitter"
                className="w-12 object-contain"
              />
            </a>
            <div className="my-auto ml-2">@houlihan_rick</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
