import React, { useState, useEffect } from "react";
import "./style.css";
import { AiOutlinePaperClip } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import axios from "axios";
import irembo from "../images/irembo.png";
const Landing = () => {
  const [formData, setFormData] = useState({
    citizenship: "",
    phone: "",
    province1: "",
    businessType: "",
    companyname: "",
    TIN: "",
    date: "",
    province2: "",
    purpose: "",
    productcategory: "",
    weight: "",
    unit: "",
    quantity: "",
    description: "",
    pname: "",
    email: "",
    NID: "",
    passport: "",
  });

  const [displaypass, setDisplayPass] = useState("none");
  const [displaynid, setDisplayNid] = useState("none");
  const [ispassRequired, setIspassRequired] = useState(false);
  const [isnidRequired, setIsnidRequired] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "citizenship" && value === "Rwandan") {
      setDisplayPass("none");
      setDisplayNid("block");
      setIsnidRequired(true);
    }
    if (name === "citizenship" && value === "Foreigner") {
      setDisplayNid("none");
      setDisplayPass("block");
      setIspassRequired(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState("");
  //   const [TINErrors, setTINErrors] = useState("");
  //   const [citizenship,setciterr] =useState("");
  //   const [phone,setphoneerr] =useState("");
  //   const [province1,setpro1err] =useState("");
  //  const  [businessType,setbusinesserr] =useState("");
  //  const [companyname,setcomnameerr] =useState("");
  //   const [TIN,settinerr] =useState("");
  //    const [date,setdateerr] =useState("");
  //   const [province2,setpro2err] =useState("");
  //   const [purpose,setpurperr] =useState("");
  //   const [productcategory,setprocu] =useState("");
  //   consy [constunit,set] =useState("");
  //   const [quantity,set] =useState("");
  //   const [description,set] =useState("");
  //   const [pname,set] =useState("");
  //   const [email,set] =useState("");
  //   const [NID,set] =useState("");
  //   const [passport,set] =useState("");
  const handleSubmit = () => {
    if (formData.quantity <= 0) {
      setErrors("Please Provide a number greater than zero");
      return;
    }

    axios
      .post("http://localhost:4040/sendEmail", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="nav">
        <img className="pic" src={irembo} alt="photo" />
      </div>
      <div className="container">
        <form>
          <div className="businessownerdetails">
            <div className="bod">
              <RiNewspaperLine /> Business Owner Details
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h4>Business Owner Details</h4>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "13px" }}>
                  Applicant Citizenship <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="citizenship"
                  style={{ width: "250px", padding: "5px",outline: "none" }}
                  value={formData.citizenship}
                >
                  <option value="#">Select Citizenship</option>
                  <option value="Rwandan">Rwandan</option>
                  <option value="Foreigner">Foreigner</option>
                </select>
              </div>
              <div style={{ display: `${displaynid}` }}>
                <label
                  style={{
                    
                    fontSize: "13px",
                    display: "block",
                    marginTop: "10px"
                  }}
                >
                  Identification Document Number
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="ID number"
                  name="NID"
                  required={isnidRequired}
                  value={formData.NID}
                />
              </div>

              <div style={{ display: `${displaypass}` }}>
                <label
                  style={{
                    
                    fontSize: "13px",
                    display: "block",
                    
                    marginTop: "10px"
                  }}
                >
                  Passport Number
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="passport number"
                  name="passport"
                  required={ispassRequired}
                  onChange={handleChange}
                  value={formData.passport}
                />
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column",marginTop: "10px" }}>
                  <label style={{fontSize: "13px" }}>
                    Phone Number
                  </label>
                  <input
                    onChange={handleChange}
                    // type="number"
                    value={formData.phone}
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <label style={{fontSize: "13px",marginTop: "10px" }}>
                    Email Address
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter an email address"
                    value={formData.email}
                  />
                </div>
              </div>
              <h4>Business Owner Address</h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "50px",
                }}
              >
                <label style={{fontSize: "13px" }}>
                  Province <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="province1"
                  value={formData.province1}
                  style={{outline:"none"}}
                >
                  <option value="#">Select Province</option>
                  <option value="Western">Western</option>
                  <option value="Eastern">Eastern</option>
                  <option value="Northern">Northern</option>
                  <option value="Southern">Southern</option>
                </select>
              </div>
            </div>
          </div>

          <div className="businessownerdetails" style={{ marginTop: "40px" }}>
            <div className="bod">
              <RiNewspaperLine />
              Business Details
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h4>Business Details</h4>

              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{  fontSize: "13px" }}>
                    Business Type <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    onChange={handleChange}
                    name="businessType"
                    value={formData.businessType}
                    style={{outline:"none"}}
                  >
                    <option>Select Business Type</option>
                    <option value="retailer">Retailer</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="manufacturer">Manufacturer</option>
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <label style={{  fontSize: "13px" }}>
                    Company Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="companyname"
                    placeholder="Enter Company Name"
                    value={formData.companyname}
                  />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
                  <label style={{  fontSize: "13px" }}>
                    TIN Number <span style={{ color: "red" }}>* </span>
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.TIN}
                    name="TIN"
                    type="number"
                    placeholder="Enter TIN number"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    marginTop:"10px"
                  }}
                >
                  <label style={{  fontSize: "13px" }}>
                    Registration Date<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.date}
                    type="date"
                    name="date"
                    placeholder="Select Date"
                  />
                </div>
              </div>
              <h4>Business Owner Address</h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "50px",
                }}
              >
                <label style={{ fontSize: "13px" }}>
                  Province <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="province2"
                  style={{ width: "250px", padding: "5px" }}
                  value={formData.province2}
                >
                  <option value="#">Select Province</option>
                  <option value="Western">Western</option>
                  <option value="Eastern">Eastern</option>
                  <option value="Northern">Northern</option>
                  <option value="Southern">Southern</option>
                </select>
              </div>
            </div>
          </div>

          <div className="businessownerdetails" style={{ marginTop: "40px" }}>
            <div className="bod">
              <RiNewspaperLine />
              Product Information
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h4>Importation Details</h4>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{fontSize: "13px" }}>
                  Purpose of Importation <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="purpose"
                  value={formData.purpose}
                >
                  <option>Select the purpose of importation</option>
                  <option value="direct">Direct Sale</option>
                  <option value="personal">Personal Use</option>
                  <option value="trial">Trial Sale</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <h4>Product Details</h4>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "13px" }}>
                  Product Category <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="productcategory"
                  value={formData.productcategory}
                >
                  <option>Select Product Category</option>
                  <option value="general">General Purpose</option>
                  <option value="construction">Construction Material</option>
                  <option value="chemicals">Chemicals</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
                <label style={{  fontSize: "13px" }}>
                  Product Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="pname"
                  placeholder="Enter product name"
                  value={formData.pname}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" ,marginTop:"10px"}}>
                <label style={{  fontSize: "13px" }}>
                  Weight (kg)
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  value={formData.weight}
                  name="weight"
                  placeholder="Weight"
                />
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
                  <label style={{  fontSize: "13px" }}>
                    Unit of Measurement <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    onChange={handleChange}
                    name="unit"
                    value={formData.unit}
                  >
                    <option value="#">Enter Unit Of Measurement</option>
                    <option value="kgs">Kgs</option>
                    <option value="tonnes">Tonnes</option>
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <label style={{  fontSize: "13px",marginTop:"10px" }}>
                    Quantity of product(s)
                    <span style={{ color: "red" }}>*</span>
                    <span style={{ color: "red" }}>{errors}</span>
                  </label>{" "}
                  <input
                    onChange={handleChange}
                    type="number"
                    name="quantity"
                    placeholder="Enter Quantity"
                    value={formData.quantity}
                    required
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column",marginTop:"10px" }}>
                <label style={{ fontSize: "13px" }}>
                  Description of Products{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={handleChange}
                  name="description"
                  placeholder="Enter Product Description"
                  style={{
                    width: "515px",
                    height: "100px",
                    outline: "none",
                    marginBottom: "30px",
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </form>

        <input
          onChange={handleChange}
          style={{
            margin: "30px",
            background: "#247AFD",
            border: "none",
            borderRadius: "50px",
            padding: "10px",
            color: "#fff",
            position: "relative",
            left: "30%",
            cursor: "pointer",
          }}
          type="submit"
          value="Submit"
          name="submit"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default Landing;
