import React from "react";
import "../Styles/Aboutus.css";
import img from "./aboutData";
const Aboutus = () => {
  const bgImage = {
    backgroundImage: `url(${img[0].url})`,
  };
  return (
    <div className="h-screen w-full">
      <div className="aparent w-full h-full  bg-center" style={bgImage}>
        <div className="pt-36 ps-14 max-ms:pt-24 max-ms:ps-10 w-fit max-md:pt-16 ">
          <h1 className="text-4xl max-md:text-2xl font-normal uppercase text-center max-xssm:text-[16px]">
            Website is under <br />
            <span className="font-medium">Construction</span>
          </h1>
          <p className="text-center font-medium    max-md:text-2xl  max-xssm:text-[13px]">
            Thanks for your patience
          </p>
          <div className="w-full flex justify-center">
            {" "}
            <button
              type="button"
              className="bg-[#00fdc2] px-5 py-2 rounded-[50px] font-bold uppercase mt-2 "
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
