import React from "react";
import m1 from ".././assets/Images/m1.jpg";
import m2 from ".././assets/Images/m2.jpg";
import m3 from ".././assets/Images/m3.jpg";
import m4 from ".././assets/Images/m4.jpg";
import "../Styles/TemplatePage.css";
import UsePOrtfolioData from "./UsePOrtfolioData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const TamplatePage = () => {
  const navigate = useNavigate();
  const handlePortfolio = () => {
    console.log("click");
    navigate("/FormData");
  };
  return (
    <div className="p-10 max-md:p-8   rounded-xl mx-auto relative overflow-hidden parent">
      <div className="flex flex-col max-w-fit mx-auto gap-10 max-h-[500px] main-div ">
        <div className="flex justify-center max-md:flex-col max-md:items-center  gap-16  mt-3 z-40">
          <div className="max-h-[300px] max-md:h-[300px] max-w-[256px] max-md:w-[100%]">
            <img
              src={m1}
              alt="model1"
              className="w-full h-full object-cover rotate-vert-center "
              onClick={() => {
                handlePortfolio();
              }}
            />
          </div>

          <div className="max-h-[300px] max-md:h-[300px] max-w-[256px] max-md:w-[100%]">
            <img src={m2} alt="model2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex justify-center max-md:flex-col max-md:items-center  gap-16  mt-3 z-50">
          <div className="max-h-[300px] max-md:h-[300px] max-w-[256px] max-md:w-[100%]">
            <img src={m4} alt="model3" className="w-full h-full object-cover" />
          </div>
          <div className="max-h-[300px] max-md:h-[300px] max-w-[256px] max-md:w-[100%]">
            <img src={m4} alt="model4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default TamplatePage;
