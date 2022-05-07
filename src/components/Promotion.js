import React from "react";

const Promotion = () => {
  return (
    <div className="mx-10 mt-20 text-center w-full text-lg p-2 border-2 border-forestgreen">
      <a
        href="https://www.mongodb.com/world-2022"
        className="text-xl mt-2 text-bold font-noto"
      >
        MongoDB World 2022
      </a>
      <br></br>
      <div className="text-xl m-2"> June 7-9 in New York 🗽</div>
      <div className="text-forestgreen">Discount Code: KarenHuaulme25</div>
      {/* <img
        src={QRCode}
        alt="QRCode"
        className="mx-auto mt-4 items-center w-2/3 "
      /> */}
      <br></br>
      <div>
        Check out the announcement-packed keynotes, hands-on workshops, and
        deep-dive technical sessions!
      </div>
    </div>
  );
};

export default Promotion;
