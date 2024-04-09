import React from "react";
import "../Styles/login-signup.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <section>
      <form>
        <div className="bg">
      <div className="containerls">
        <div style={{ background: "#60cfa5" }} className="header1">
          <div  style={{ background: "#60cfa5", color:"black" }} className="text">Login</div>
        </div>
        <div style={{ background: "#60cfa5" }} className="textboxes">
          <div className="input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <span style={{ background: "#60cfa5" }} className="check">
          <input type="checkbox" /> Remember me on this device
        </span>
        <div className="submit-container">
          <div>
            <button className="submit">Login</button>
          </div>
        </div>
        <span style={{ background: "#60cfa5" }} className="login-signup">
          Don't have an account? <Link to="/signup" style={{ background: "#60cfa5" }}>Sign Up</Link>
        </span>
      </div>
      </div>
      </form>
      </section>
    </>
  );
};
export default Login;