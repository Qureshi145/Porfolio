import React from "react";
import "../Styles/home.css";
import { useNavigate } from "react-router-dom";
import h1 from "../assets/Images/h1.jpeg";
import h2 from "../assets/Images/h2.jpeg";
import h3 from "../assets/Images/h3.jpeg";
import h4 from "../assets/Images/h4.jpeg";
import h5 from "../assets/Images/h5.jpeg";
import h6 from "../assets/Images/h6.jpeg";
import logo from "../assets/Images/logo.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="box1">
          <div id="d1" style={{ fontSize: "50px" }}>
            <h1>Discover the</h1>
            <h1>Perfect template</h1>
            <h1>For your portfolio</h1>
            <button className="button" onClick={() => navigate("/signup")}>
              Join us now
            </button>
            <button className="button" onClick={() => navigate("/template")}>
              create template
            </button>
          </div>
          <div id="d2" className="w-[700px] h-[600px]">
            <img
              src={h1}
              alt="h1"
              className="w-[600px] h-[700px] object-cover"
            />
          </div>
        </div>
        <div className="box2">
          <div>
            <h1>costumization</h1>
          </div>
          <div>
            <h1>responsive</h1>
          </div>
          <div>
            <h1>user friendly</h1>
          </div>
        </div>
        <div className="box3  overflow-hidden ">
          <div id="d3">
            <h1>Discover the template</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit
              dignissimos molestiae cupiditate voluptatibus hic, debitis
              officiis odit odio magnam ratione adipisci amet fugit? Labore
              deserunt impedit modi cupiditate, voluptatem laudantium quos cum
              dicta!
            </p>
            <button className="button" onClick={() => navigate("")}>
              Try now
            </button>
          </div>
          <div id="d4" className="w-[600px] h-[400px] ">
            <img
              src={h2}
              alt="h2"
              className="w-[100%px] h-[100%] object-contain "
            />
          </div>
        </div>
        <div className="box4 ">
          <div id="d5" className="w-[600px] h-[400px]">
            <img
              src={h3}
              alt="h3"
              className="w-[600px] h-[400px] object-contain"
            />
          </div>

          <div id="d6">
            <h1>Discover the template</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit
              dignissimos molestiae cupiditate voluptatibus hic, debitis
              officiis odit odio magnam ratione adipisci amet fugit? Labore
              deserunt impedit modi cupiditate, voluptatem laudantium quos cum
              dicta!
            </p>
            <button className="button" onClick={() => navigate("")}>
              Try now
            </button>
          </div>
        </div>
        <div className="box5">
          <div id="d7" className="w-[100px] h-[100px]">
            <img
              src={logo}
              alt="h4"
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              adipisci eligendi natus cumque omnis officiis corrupti voluptate.
              Dolore ipsa esse ratione accusamus impedit a, ullam voluptatum
              soluta illo tempora nemo praesentium optio.
            </p>
          </div>
        </div>
        <div className="box6 my-7">
          <div className="max-w-[390px] h-[400px]">
            <img
              src={h4}
              alt="h4"
              className="h-[100%] w-[100%] object-cover rounded-lg"
            />
            <h1>Blog Title</h1>
          </div>
          <div className="max-w-[390px] h-[400px]">
            <img
              src={h5}
              alt="h5"
              className="h-[100%] w-[100%] object-cover rounded-lg"
            />
            <h1>Blog Title</h1>
          </div>
          <div className="max-w-[390px] h-[400px]">
            <img
              src={h6}
              alt="h6"
              className="h-[100%] w-[100%] object-cover rounded-lg"
            />
            <h1>Blog Title</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
