import React from "react";
import logore from "../../assets/Images/logore.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <div className="  bg-[#60CFA5] py-4 px-20 max-xssm:px-6">
        <div className=" flex justify-between items-start mt-6  gap-6  max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center ">
          <div className="">
            <img src={logore} alt="Nothing" width={100} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl">Product</h1>
            <p className="font-medium">Templates</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl">Resources</h1>
            <p className="font-medium ">Blog</p>
            <p className="font-medium ">User Guide</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl">Company</h1>
            <p className="font-medium ">About</p>
            <p className="font-medium ">Join us</p>
          </div>
          <div className="flex flex-col gap-2 max-xms:justify-center max-xms:text-center max-xms:w-full">
            <h1 className="font-medium text-2xl ">
              Subscribe to our newsletter
            </h1>
            <p className="font-medium ">
              For Product announcements and exclusive insights
            </p>
            <div className="flex items-center   p-1.5 rounded-lg h-[60px] max-lg:h-auto max-lg:flex-col max-lg:gap-3 ">
              <div className="border  border-black/20 flex gap-4 h-full w-full px-2 items-center">
                <MdOutlineMailOutline className=" text-white text-2xl" />
                <input
                  type="email"
                  name="email"
                  placeholder="Input Your Email"
                  className="bg-transparent text-white outline-none focus:outline-none placeholder:text-white tracking-wide text-[20px] w-full h-full max-lg:py-3"
                />
              </div>
              <button
                type="button"
                className=" border border-black/20 bg-black/90 text-white px-4 h-full  rounded max-lg:w-full max-lg:py-3"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="flex max-lg:flex-col justify-between items-center  gap-6 ">
          <div>
            <select name="" id="" className="px-2 py-1">
              <option value="English">English</option>
            </select>
          </div>
          <div>
            <p className="text-[19px] tracking-wide max-lg:w-full max-lg:text-center ">
              &copy; 2024 portfolify . Privacy . Terms . Sitemap
            </p>
          </div>
          <div className="flex gap-4 text-2xl max-lg:w-full max-lg:justify-center">
            <FaFacebook className="text-[blue] max-lg:self-center" />
            <FaLinkedin className="text-[darkblue] max-lg:self-center" />
            <IoLogoYoutube className="text-[red] max-lg:self-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
