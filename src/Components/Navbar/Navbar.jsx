import React from "react";
import logo from "../../assets/images/logo.png";
import { FaUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const menuChange = (e) => {
  const navBar = document.querySelector(".navbarList");
  const menuIcon = document.querySelector(".menuIcon");
  const timesIcon = document.querySelector(".timesIcon");
  menuIcon.classList.toggle("menuIcon2");
  timesIcon.classList.toggle("timesIcon2");
  navBar.classList.add("verticalMenuBar");
};
const timesChange = (e) => {
  const navBar = document.querySelector(".navbarList");
  const menuIcon = document.querySelector(".menuIcon");
  const timesIcon = document.querySelector(".timesIcon");
  menuIcon.classList.toggle("menuIcon2");
  timesIcon.classList.toggle("timesIcon2");
  navBar.classList.remove("verticalMenuBar");
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Navbar flex items-center justify-between px-3 py-2 overflow-hidden z-50">
        <div className="Logo xsm:self-start">
          <img
            src={logo}
            alt="Nothing"
            width={100}
            onClick={() => {
              navigate("/");
            }}
            className="max-xsm:w-[70px]"
          />
        </div>
        <nav className="z-50">
          <ul className="navbarList">
            <Link to="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link to="about">
              <li className="cursor-pointer">About Us</li>
            </Link>
            <Link to="template">
              <li className="cursor-pointer">Template</li>
            </Link>
            <Link to="blog">
              <li className="cursor-pointer">Blog</li>
            </Link>
          </ul>
        </nav>
        <div className="icon flex items-center gap-5 self-start">
          {/* <FaUser className="bg-[#00DFC2] text-white p-2 rounded-full text-[40px] max-Xs:text-[30px] " /> */}
          <Link to="login">
            <li className="cursor-pointer max-xsm:text-[13px] text-[#00dfc2] font-bold">
              Login
            </li>
          </Link>
          <Link to="signup">
            <li className="cursor-pointer max-xsm:text-[13px] bg-[#00dfc2] p-1.5 rounded-xl">
              Sign UP
            </li>
          </Link>
          <LuMenu
            className="menuIcon text-3xl "
            onClick={(e) => menuChange(e)}
          />
          <LiaTimesSolid
            className=" timesIcon text-3xl"
            onClick={(e) => timesChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
