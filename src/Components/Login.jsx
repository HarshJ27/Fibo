import React from "react";
import "../App.css";
import FiboLogo from "../Assets/Fibo logo.png";
import FiboLeft from "../Assets/Fibo Left.png";
import Google from "../Assets/Google - png 0.png";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/dashboard");
    };
  return (
    <>
      <div className="App">
        <div className="left">
          <img src={FiboLeft} alt="fitness" />
          <h1>Fitness Made Easy</h1>
          <p>
            FiBO helps you track your fitness goals, and manage your gyms,
            clients and branches in a one stop solution, saving you time and
            money!
          </p>
        </div>
        <div className="right">
          <div className="brandName">
            <img src={FiboLogo} alt="Company Logo" />
            <h5>
              FI<span>T</span>NESS
            </h5>
          </div>
          <div className="login">
            <h5>Login to your Account</h5>
            <p>Your Own Digital Campaign</p>
          </div>
          <form>
            <div className="input-group">
              +91
              <input
                type="tel"
                id="mobile-number"
                name="mobile-number"
                placeholder="mobile number"
              />
            </div>
            <button className="mobile" type="submit">
              Login with Mobile Number
            </button>
            OR
            <div className="google" onClick={handleClick}>
              <img src={Google} alt="google" />
              Signin with Google
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
