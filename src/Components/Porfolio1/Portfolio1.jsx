import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import man from "../../assets/imgs/man.png";
import "./Potfolio.css";
import folio from "../../assets/imgs/folio-1.jpg";
import image from "../../assets/imgs/img-2.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Portfolio1 = () => {
  const pdfRef = useRef();
  const navigate = useNavigate();
  const Back = () => {
    navigate("/template");
  };
  const DownloadPage = () => {
    const input = pdfRef.current;
    const inputWidth = input.offsetWidth;
    const inputHeight = input.offsetHeight;

    html2canvas(input, {
      width: inputWidth,
      height: inputHeight,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", [inputWidth, inputHeight], true);
      pdf.addImage(imgData, "PNG", 0, 0, inputWidth, inputHeight);
      pdf.save("PotMain.pdf");
    });
  };

  const EditPage = () => {
    navigate("/formData");
  };

  const location = useLocation();
  const {
    uname,
    skillCategory,
    number,
    email,
    address,
    img,
    skill,
    about,
    proImg1,
    proImg2,
    proImg3,
    proImg4,
  } = location.state || {};
  const skillsArray =
    skill && skill.length > 0 ? skill.split(",").map((s) => s.trim()) : [];

  return (
    <>
      <div className="PotMain" ref={pdfRef}>
        <nav className="navBar">
          <ul className="flex justify-center items-center gap-16">
            <li>
              <a href="#home" className="max-xsm:text-[13px] text-[29px]">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="max-xsm:text-[13px] text-[29px]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="max-xsm:text-[13px] text-[29px]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#skill" className="max-xsm:text-[13px] text-[29px]">
                Skills
              </a>
            </li>
          </ul>
        </nav>
        <div className="header">
          <div className="userInfo" id="home">
            <h1 className="text-[54px]  max-xms:text-[20px]">
              Hi <br />I am <span>{uname}</span>
            </h1>
            <p className=" text-[30px] max-xsm:text-[17px]">{skillCategory}</p>
          </div>
        </div>
        <div
          id="About"
          className="flex p-5 justify-center max-md:flex-col max-md:justify-center max-md:items-center"
        >
          <div className=" max-w-[40%] flex justify-center">
            <img
              src={img}
              alt="Man"
              className="imgBlock w-[400px] max-md:w-full max-md:object-cover max-md:h-[449px] object-cover"
            />
          </div>
          <div className="max-w-[60%] p-8 max-md:p-3 max-md:max-w-full ">
            <h1 className=" max-md:text-center">About Me</h1>
            <p className="max-md:text-justify text-2xl">{about}</p>
          </div>
        </div>
        <div className="Projects p-5">
          <div>
            <h1 className="text-center font-bold text-[40px] my-5 text-[royalblue]">
              My Projects
            </h1>
            <div className="flex flex-col max-md:flex-col  justify-center items-center gap-[30px] p-7 ">
              <div className="flex w-full gap-[30px] justify-center max-ms:flex-col max-ms:items-center">
                <a
                  href="#"
                  className="imgBlock w-[400px] max-md:w-full max-md:object-cover max-md:h-[449px]"
                >
                  <img src={proImg1} alt="img1" />
                </a>
                <a
                  href="#"
                  className="imgBlock w-[400px]  max-md:w-full max-md:object-cover max-md:h-[449px]"
                >
                  <img src={proImg2} alt="img2" />
                </a>
              </div>
              <div className="flex w-full gap-[30px] justify-center max-ms:flex-col max-ms:items-center">
                {" "}
                <a
                  href="#"
                  className="imgBlock w-[400px] max-md:w-full max-md:object-cover max-md:h-[449px]"
                >
                  <img src={proImg3} alt="img1" />
                </a>
                <a
                  href="#"
                  className="imgBlock w-[400px] max-md:w-full max-md:object-cover max-md:h-[449px]"
                >
                  <img src={proImg4} alt="img1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="skills p-5 flex flex-col" id="skill">
          <h1 className="text-center font-bold text-[40px] my-5 text-[royalblue]">
            Skills
          </h1>
          <div className="flex gap-16 max-lg:flex-col justify-center items-center max-lg:flex-col-reverse">
            <div className="max-w-[40%]  max-lg:max-w-[100%]">
              <img
                src={image}
                alt="img"
                className="w-full shadow-2xl rounded-lg object-contain"
              />
            </div>
            <div className="self-center w-full max-lg:max-w-[90%]">
              <div className="contact">
                <div className="skillSec">
                  {skillsArray?.map((skill, index) => (
                    <div key={index} className="fancySpan">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="contact" className="my-4 ">
          <div>
            <p className="text-center text-[#000] text-[30px]">
              How can you communicate?
            </p>
            <h6 className="text-[royalblue] text-center font-bold mt-2 mb-4 text-[40px] max-xsm:text-[25px]">
              Contact Details
            </h6>
            <div className="content1">
              <table className="tabel">
                <tr>
                  <td>My name</td>
                  <td>{uname}</td>
                </tr>
                <tr>
                  <td>My Email</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>My Phone</td>
                  <td>{number}</td>
                </tr>
                <tr>
                  <td>My address</td>
                  <td>{address}</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
        <footer className="footer mt-20 bg-black flex justify-center items-center min-h-[65px] text-white text-center text-[25px] py-[20px] 0px max-md:text-[15px] max-xssm:text-[10px]">
          &copy; Copyright abcWebdeveloper.com All right Reserved 2024-2030{" "}
        </footer>
      </div>
      <hr />
      <div className="bg-black flex justify-evenly  items-center p-[15px] gap-3 flex-wrap">
        /
        <button
          className="btn"
          onClick={() => {
            Back();
          }}
        >
          Back
        </button>
        <button
          className="btn"
          onClick={() => {
            EditPage();
          }}
        >
          Edit Page
        </button>
        <button
          className="btn"
          onClick={() => {
            DownloadPage();
          }}
        >
          Download page
        </button>
      </div>
    </>
  );
};

export default Portfolio1;
