import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const { email, password } = formData;

  const [submitted] = useState(false);
  const [error, setError] = useState(false);
  const [err, setErr] = useState({
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState("");

  useEffect(() => {}, []);

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>{errorMessages}</h1>
      </div>
    );
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setErr((prevState) => {
      const stateObj = { ...prevState, [name]: "" };
      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter email which is not used.";
          }
        default:
          break;
      }
      return stateObj;
    });
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>{errorMessages}</h1>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessages("Please provide data for all fields");
      setError(true);
    }

    const userInfo = {
      email,
      password,
    };

    axios.post("http://localhost:4040/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      localStorage.setItem('token',res.data.token)
      navigate('/home')
    })
    .catch(err=>{
      console.log(err)
    })

  };
  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back to </h1>
          <h2>ZipURL</h2>
          <p>Don't have account?</p>
          <Link to="/signup">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="messages">
              {successMessage()}
              {errorMessage()}
              {err.password}
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChange}
              value={email}
              required
              className="input"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
              value={password}
              required
              className="input"
            />

            <button type="submit" className="green_btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
