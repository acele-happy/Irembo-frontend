import React, { useEffect, useState } from "react";
import "./styles.css";
import irembo from "../images/irembo.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "react-router-dom";

const Home = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [errors, setErrors] = useState("");
  const [data, setData] = useState({});

  const handleLongUrlChange = (e) => {
    setLongUrl(e.target.value);
  };
  const handleCustomUrlChange = (e) => {
    setCustomAlias(e.target.value);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userId = decoded.id;
    setErrors("");
    if (longUrl == "") {
      return setErrors("Provide URL to shorten!");
    }
    if (customAlias == "") {
      axios
        .post(
          `https://zipurl-backend-ie3a.onrender.com/url/shorten/:${userId}`,
          {
            longUrl,
          }
        )
        .then((res) => {
          setData(res);
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
    axios
      .post(`https://zipurl-backend-ie3a.onrender.com/url/shorten/:${userId}`, {
        longUrl: longUrl,
        customAlias: customAlias,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data);
        console.log(err);
      });
  };

  const [urlData, setUrlData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userId = decoded.id;
    axios
      .get(
        `https://zipurl-backend-ie3a.onrender.com/url/getUrlByUserId/:${userId}`
      )
      .then((res) => {
        console.log(res.data);
        setUrlData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRedirect = (alias) => {
    axios
      .post(`https://zipurl-backend-ie3a.onrender.com/url/redirect/:${alias}`)
      .then((res) => {
        window.open(res.data, "_blank");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <div className="container">
        <img className="pic" src={irembo} alt="photo" />
        <span
          style={{ color: "#0f83ff", fontWeight: "bold", marginRight: "30px" }}
        >
          URL-Shortening Service
        </span>
        <button
          style={{
            background: "#0f83ff",
            color: "#fff",
            border: "none",
            right: "50px",
            position: "relative",
            padding: "5px",
            borderRadius: "50px",
            width: "100px",
            cursor: "pointer",
          }}
          onClick={logout}
        >
          Logout
        </button>
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
        <p
          style={{
            color: "red",
            bottom: "40px",
            left: "40px",
            position: "absolute",
          }}
        >
          {errors}
        </p>
        <input
          style={{
            padding: "10px",
            border: "none",
            outline: "none",
            width: "30%",
            borderRadius: "5px",
            marginTop: "20px",
            border: "1px solid #247AFD",
          }}
          type="text"
          placeholder="Enter URL to shorten"
          name="longUrl"
          value={longUrl}
          onChange={handleLongUrlChange}
        />
        <input
          style={{
            padding: "10px",
            border: "none",
            outline: "none",
            width: "30%",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "20px",
            borderRadius: "5px",
            border: "1px solid #247AFD",
          }}
          type="text"
          placeholder="Enter Custom Alias(Optional)"
          name="customAlias"
          value={customAlias}
          onChange={handleCustomUrlChange}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#247AFD",
            color: "#fff",
            border: "none",
            width: "130px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Shorten
        </button>
      </div>

      <div
        style={{
          width: "80%",
          margin: "auto",
          top: "100px",
          position: "relative",
        }}
      >
        <h3>Recent URLs</h3>
        <div>
          {urlData.map((url, index) => (
            <span
              style={{
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
                width: "100px",
              }}
              onClick={() => handleRedirect(url.alias)}
              key={index}
            >
              https://shorturl/{url.alias}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
