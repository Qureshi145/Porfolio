import React, { useState } from "react";
import "./UsePorflioData.css";
import { useNavigate } from "react-router-dom";
const UsePOrtfolioData = () => {
  const [uname, setuname] = useState("");
  const [skillCategory, setskillCategory] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [img, setimg] = useState(null); // Changed to null
  const [skill, setskill] = useState([]);
  const [about, setabout] = useState("");
  const [proImg1, setproImg1] = useState(null); // Changed to null
  const [proImg2, setproImg2] = useState(null); // Changed to null
  const [proImg3, setproImg3] = useState(null); // Changed to null
  const [proImg4, setproImg4] = useState(null); //
  const navigate = useNavigate();
  const handleProps = () => {
    navigate("/portfolio1", {
      state: {
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
      },
    });
  };
  const handleFileChange = (e, setState) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div>
        <form action="" method="post" className="gradient FormData h-[100%]">
          <input
            type="text"
            placeholder="Your Name"
            value={uname}
            onChange={(e) => {
              setuname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="your Skill category like web developer"
            value={skillCategory}
            onChange={(e) => {
              setskillCategory(e.target.value);
            }}
          />

          <input
            type="number"
            placeholder="Your number"
            value={number}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
          <div className="flex flex-col gap-2">
            <label className="text-[23px] text-white">
              Your Image For About Page
            </label>
            <input type="file" onChange={(e) => handleFileChange(e, setimg)} />
          </div>
          <input
            type="text"
            value={skill}
            placeholder="Web Developer,app developer,Video Editing,..."
            onChange={(e) => {
              setskill(e.target.value);
            }}
          />
          <div className="flex flex-col gap-2">
            <label className="text-[23px] text-white">
              Your Images For Project
            </label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setproImg1)}
            />
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setproImg2)}
            />
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setproImg3)}
            />
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setproImg4)}
            />
          </div>
          <textarea
            cols="30"
            rows="5"
            placeholder="Your About"
            className="min-h-[80px]"
            value={about}
            onChange={(e) => {
              setabout(e.target.value);
            }}
          ></textarea>
          <button
            type="button"
            className="btn"
            onClick={() => {
              handleProps();
            }}
          >
            See your Porfolio
          </button>
        </form>
      </div>
    </>
  );
};

export default UsePOrtfolioData;
