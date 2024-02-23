import React from "react";
import "./styles.css";
import svg from "../images/pro.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="nav">
        <Link to='login'>
        <button className="login">Login</button>
        </Link>
        <Link to='signup'>
        <button className="signup">SignUp</button>
        </Link>
      </div>
      <div className="body">
        <div className="content">
          <h1 style={{ fontSize: "70px" }}>
            Shorten
            <br /> URLs, Expand <br />
            Possibilities!
          </h1>
          <p
            style={{
              width: "300px",
              bottom: "30px",
              position: "relative",
              color: "#333",
            }}
          >
            Shortening your URL makes it easier to share on social media, email,
            text messages and more. Try it out below and see for yourself.
          </p>
          <Link to="/login">
          <button
            style={{
              backgroundColor: "#0f83ff",
              color: "#fff",
              padding: "10px",
              borderRadius: "100px",
              width: "100px",
              border: "none",
              bottom: "30px",
              position: "relative",
              width: "200px",
              fontWeight: "bold",
              height: "50px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
          </Link>
        </div>
        <div className="svg">
          <img src={svg} />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
