import React from "react";
import QRCode from "../images/WorldQRCode.png";

const Promotion = () => {
  return (
    <div className="mx-10 mt-20 text-center w-full text-lg p-2 border-2 border-springgreen">
      <div>
        Attend MongoDB World and have an amazing time learning all the things!
      </div>

      <img
        src={QRCode}
        alt="QRCode"
        className="mx-auto mt-4 items-center w-2/3 "
      />
      <div>Discount Code: KarenHuaulme25</div>
    </div>
  );
};

export default Promotion;
