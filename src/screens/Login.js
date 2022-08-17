import React, { useState } from "react";
import { connect } from "react-redux";
import { AddUser, LoginUser } from "../actions/user";
import { REGEX } from "../utils/Regex";
import { useNavigate } from "react-router-dom";
const Login = ({ loginDetail }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  var getemail = JSON.parse(localStorage.getItem("email token"));
  var getpassword = JSON.parse(localStorage.getItem("password token"));
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = data;
    if (!REGEX.email.test(email)) alert("enter valid email");
    else if (password.length > "8") alert("please enter At least 8 characters");
    else if (data.email == getemail && data.password == getpassword) {
      let details = {
        email: data.email,
        password: data.password,
      };
      console.log(details);
      loginDetail(details);

      navigate("/UserProfile");
    } else {
      alert("Invalid credentials please check your email and password");
    }
  };

  return (
    <div>
    
      <div className="container">
      <h1>Login Page</h1>
      <hr></hr>
        <label htmlFor="email" className="label">
          {" "}
          Email:{" "}
        </label>
        <input
          type="email"
          placeholder="Enter email"
          className="form-control"
          autoComplete="off"
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        ></input>

        <label htmlFor="password" className="label">
          Password :{" "}
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="form-control"
          autoComplete="off"
          minLength={8}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        ></input>
        <br></br>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
      {/* <p>If you are new user then click on this button</p> */}
      {/* <button onClick={ handleClick}>Register</button> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDetail: (loginData) => dispatch(LoginUser(loginData)),
  };
};
const loginStore = connect(null, mapDispatchToProps)(Login);
export default loginStore;
