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
    otherNames: "",
    surname: "",
    nationality: "",
    pimportation:""
  });

  const [displaypass, setDisplayPass] = useState("none");
  const [displaynid, setDisplayNid] = useState("none");
  const [displaypurpose, setDisplayPurpose] = useState("none");
  const [ispassRequired, setIspassRequired] = useState(false);
  const [isnidRequired, setIsnidRequired] = useState(false);
  const [ispurposeRequired, setIspurposeRequired] = useState(false);

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

    if(name === "purpose" && value === "other"){
      setDisplayPurpose("flex");
      setIspurposeRequired(true)
    }else{
      setDisplayPurpose("none")
      setIspurposeRequired(false)

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
      .post("https://zipurl-backend-ie3a.onrender.com/sendEmail", formData)
      .then((res) => {
        console.log(res);
        setErrors(" ");
        alert("User Created");
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
                  style={{ width: "250px", padding: "5px", outline: "none" }}
                  value={formData.citizenship}
                  required
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
                    marginTop: "10px",
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
                  onChange={handleChange}
                  value={formData.NID}
                />
              </div>

              <div style={{ display: `${displaypass}` }}>
                <label
                  style={{
                    fontSize: "13px",
                    display: "block",

                    marginTop: "10px",
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  <label style={{ fontSize: "13px" }}>Other names<span style={{ color: "red" }}>*</span></label>
                  <input
                    onChange={handleChange}
                    type="text"
                    value={formData.otherNames}
                    name="otherNames"
                    placeholder="Other names"
                    required
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <label style={{ fontSize: "13px", marginTop: "10px" }}>
                    Surname<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={formData.surname}
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  <label style={{ fontSize: "13px" }}>Phone Number</label>
                  <input
                    onChange={handleChange}
                    type="number"
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
                  <label style={{ fontSize: "13px", marginTop: "10px" }}>
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

              <div>
                <label
                  style={{
                    fontSize: "13px",
                    display: "block",

                    marginTop: "10px",
                  }}
                >
                  Nationality
                  <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="nationality"
                  value={formData.nationality}
                  style={{ outline: "none" }}
                  required
                >
                  <option value="#">Select Nationality</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo (Congo-Brazzaville)">
                    Congo (Congo-Brazzaville)
                  </option>
                  <option value="Congo (Congo-Kinshasa)">
                    Congo (Congo-Kinshasa)
                  </option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czechia (Czech Republic)">
                    Czechia (Czech Republic)
                  </option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea (North)">Korea (North)</option>
                  <option value="Korea (South)">Korea (South)</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Macedonia">North Macedonia</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States of America">
                    United States of America
                  </option>
                  <option value="Uruguay">Uruguay</option>
                </select>
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
                  name="province1"
                  value={formData.province1}
                  style={{ outline: "none" }}
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
                  <label style={{ fontSize: "13px" }}>
                    Business Type <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    onChange={handleChange}
                    name="businessType"
                    value={formData.businessType}
                    style={{ outline: "none" }}
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
                  <label style={{ fontSize: "13px" }}>
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  <label style={{ fontSize: "13px" }}>
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
                    marginTop: "10px",
                  }}
                >
                  <label style={{ fontSize: "13px" }}>
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
                <label style={{ fontSize: "13px" }}>
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
              <div
                style={{ display: `${displaypurpose}`,flexDirection: "column", marginTop:"10px"  }}
              >
                <label style={{ fontSize: "13px" }}>
                  Specify purpose of importation{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="pimportation"
                  placeholder="Enter the importation purpose"
                  value={formData.pimportation}
                />
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <label style={{ fontSize: "13px" }}>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <label style={{ fontSize: "13px" }}>Weight (kg)</label>
                <input
                  onChange={handleChange}
                  type="number"
                  value={formData.weight}
                  name="weight"
                  placeholder="Weight"
                />
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  <label style={{ fontSize: "13px" }}>
                    Unit of Measurement <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    onChange={handleChange}
                    name="unit"
                    value={formData.unit}
                    required
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
                  <label style={{ fontSize: "13px", marginTop: "10px" }}>
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
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
