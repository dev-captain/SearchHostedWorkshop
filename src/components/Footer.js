import React from "react";

import Community from "../images/Community.png";

const AdditionalResources = () => {
  return (
    <div className="flex w-full flex-col items-left bg-slateblue text-white px-20 pb-6">
      <div className="flex w-3/4 mx-auto text-center items-center">
        <div className="text-center items-center">
          Join our online{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mongodb.com/community/forums/"
          >
            <span className="text-springgreen font-bold underline">
              MongoDB Community
            </span>
          </a>{" "}
          to interact with our product and engineering teams along with
          thousands of other MongoDB and Realm users.
        </div>
        <img
          src={Community}
          alt="twitter"
          className="mx-2 w-24 object-contain"
        />
      </div>
    </div>
  );
};

export default AdditionalResources;
