import React from "react";
import "../Styles/login-signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
    <section>
      <form>
    <div>
      <div className="containerls">
        <div style={{ background: "#60cfa5" }} className="header1">
          <div style={{ background: "#60cfa5", color:"black" }} className="text">Sign Up</div>
        </div>
        
        <div style={{ background: "#60cfa5" }}className="textboxes">
          <div className="input">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
          
        </div>
        <span style={{ background: "#60cfa5" }} className="check">
          <input type="checkbox" /> By signing up, I agree with the Terms of Use
          and Privacy Policy
        </span>
        <div className="submit-container">
          <div>
            <button className="submit">Sign Up</button>
          </div>
        </div>
        <span style={{ background: "#60cfa5" }} className="login-signup">
          Already have an account? <Link to="/login" style={{ background: "#60cfa5" }}>Login</Link>
        </span>
      </div>
      </div>
      </form>
      </section>
    </>
  );
};
export default Signup;