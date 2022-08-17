import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
// import {withRouter} from "react-router-dom";
import { REGEX } from "../utils/Regex";
import { actionCreators, AddUser } from "../actions/user";
import { useNavigate } from "react-router-dom";
import { axios } from "axios";

const RightContent = ({AddUser}) => {

  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    const { name, username, mobile, email, city, confirmPassword, password } = inpval;

    // console.log("bbvb===>", REGEX.email.test(email));
    if (name === "") {
      alert("please fill this name field")
        
      }
    else if (!REGEX.email.test(email))
      alert("please enter valid email format");
    else if (username === "") alert("please fill this user name field");
    else if (mobile === "") alert("please fill this required field");
    else if (mobile.length !== 10)
      alert("please enter valid length (10) mobile number");
    else if (city == "") alert("required this field");
    else if (password == "") alert("please fill this password field");
    else if (!password.match(/[A-Z]/))
      alert("please enter at least one uppercase letter");
    else if (!password.match(/[a-z]/))
      alert("please enter at least one lowercase letter");
    else if (password.length != 8) alert("please enter At least 8 characters");
    else if (!password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/))
      alert("please enter At least 1 number or special character");
    else if (confirmPassword == "")
      alert("please fill this confirm password field");
    else if (password !== confirmPassword)
      alert("Doesn't match your password . please check again");
    else {
     
      let newUser = {
        name: inpval.name,
        username: inpval.username,
        email: inpval.email,
        mobile: inpval.mobile,
        city: inpval.city,
        password: inpval.password,
        
      };

      
   console.log("Register console data ===>" , newUser);
     navigate("/Login");
     
     AddUser(newUser);
      // adduser(newUser);
      setInpval((prev) => ({ ...prev, name: "", username: "", mobile: "",  email: "",  city: "", confirmPassword: "",password: "",  }));
      
    } 
 }
  const handleDashboard =() =>{
  navigate1("/Dashboard")
  }

  const handleView =() =>{
   navigate2("/ViewUser")
  }

  return (
    <div>
      <form method="post"> 
        
        <div className="container">
        <h1>Registration Form </h1>
        <hr></hr>
        <label htmlFor="name" className="label">
          Name :
        </label>
     
          <input
            type="text"
            placeholder="Enter  Name"
            value={inpval.name}
            className="form-control"
            onChange={(e) =>
              setInpval((prev) => ({ ...prev, name: e.target.value }))
            }
          ></input>

          <label htmlFor="email" className="label">
            {" "}
            Email:{" "}
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={inpval.email}
            onChange={(e) =>
              setInpval((prev) => ({ ...prev, email: e.target.value }))
            }
          ></input>

          <label htmlFor="username" className="label">
            User Name :{" "}
          </label>
          <input
            type="text"
            placeholder="Enter User Name"
            className="form-control"
            value={inpval.username}
            onChange={(e) =>
              setInpval((prev) => ({ ...prev, username: e.target.value }))
            }
          ></input>

          <label htmlFor="mobile" className="label">
            Mobile :{" "}
          </label>
          <input
            type="number"
            placeholder="Enter mobile no."
            value={inpval.mobile}
            className="form-control"
            maxLength="10"
            onChange={(e) =>
              setInpval((prev) => ({ ...prev, mobile: e.target.value }))
            }
          ></input>

          <label htmlFor="city" className="label">
            City:{" "}
          </label>
          <input
            type="text"
            placeholder="Enter city"
            className="form-control"
            value={inpval.city}
            onChange={(e) =>
              setInpval((prev) => ({ ...prev, city: e.target.value }))
            }
          ></input>

          <label htmlFor="password" className="label">
            Password :
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={inpval.password}
            onChange={(e) =>
              setInpval((prev) => ({ ...prev, password: e.target.value }))
            }
          ></input>

          <label htmlFor="confirmpassword" className="label">
            Confirm Password :{" "}
          </label>
          <input
            type="password"
            placeholder="Enter confirm password"
            className="form-control"
            value={inpval.confirmPassword}
            onChange={(e) =>
              setInpval((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          ></input>

          <br></br>
          <button className="btn btn-primary" onClick={handleClick} >
            Register
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button className="btn btn-secondary" onClick={handleDashboard}>Go to Dashboard</button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button className="btn btn-danger" onClick={handleView}>View Users</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // adduser: (data) => dispatch(actionCreators.registerUser(data)),
    AddUser: (data) => dispatch(AddUser(data))
  }
}

const LoginContainer = connect(null, mapDispatchToProps)(RightContent)

export default LoginContainer
// export default RightContent;
