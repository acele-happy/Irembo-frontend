import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const [submitted] = useState(false);
  const [error, setError] = useState(false);
  const [err, setErr] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState("");

  const navigate = useNavigate();

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
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setErrorMessages("Please provide data for all fields");
      setError(true);
    }

    const userInfo = {
      firstName,
      lastName,
      email,
      password,
    };
  };
  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome to </h1>
          <h2>ZipURL</h2>
          <p>Already have account?</p>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sign in
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="messages">
              {successMessage()}
              {errorMessage()}
              {err.password}
            </div>

            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={onChange}
              value={firstName}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={onChange}
              value={lastName}
              required
              className="input"
            />
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
