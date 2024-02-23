import React from "react";
import "./styles.css";
import irembo from "../images/irembo.png";

const Home = () => {
  return (
    <div>
      <div className="container">
        <img className="pic" src={irembo} alt="photo" />
        <span
          style={{ color: "#0f83ff", fontWeight: "bold", marginRight: "30px" }}
        >
          URL-Shortening Service
        </span>
      </div>

      <div
        style={{
          width: "80%",
          margin: "auto",
          top: "60px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            padding: "10px",
            border: "none",
            outline: "none",
            width: "50%",
            borderRadius: "5px",
            border: "1px solid #247AFD",
          }}
          type="text"
          placeholder="Enter URL to shorten"
        />
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#247AFD",
            color: "#fff",
            border: "none",
            width: "130px",
            cursor: "pointer",
          }}
        >
          Shorten
        </button>
      </div>
    </div>
  );
};
export default Home;
