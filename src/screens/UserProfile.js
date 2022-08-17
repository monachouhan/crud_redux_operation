import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { UserProfile } from "../actions/user";
import { config } from "../api/config";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const Userprofile = ({UserProfile, userDetails} ) => {  
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
  useEffect(() => {
    UserProfile(); 
  }, []);


const handleClick=()=>{
  localStorage.removeItem('token');
    navigate2("/Register")

}
const handleClick2=()=>{
navigate3("/Edit")
}
  return(
    <div>
      <center>
        <h1>Dashboard</h1>
        <button className="btn btn-primary" style={{marginLeft:"80%" }} onClick={handleClick}>Log Out</button>
        <hr></hr>
        <br></br>
        <table>
        <thead>
      <tr>
        <th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>Email</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>User Name</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>City</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>Phone no.</th>
       
      </tr>
   
    </thead>
   <br></br>
    <tbody>
      <td>{userDetails.name} </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <td>{userDetails.email} </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <td>{userDetails.username} </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <td>{userDetails.city} </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <td>{userDetails.mobile} </td>
    </tbody>
        </table>
      {/* <p>Name : {userDetails.name}</p>
      <p>Email : {userDetails.email}</p>
      <p>User Name : {userDetails.username}</p>
      <p>City : {userDetails.city}</p>
      <p>Phone no. : {userDetails.mobile}</p> */}
 <br></br> <br></br>
      <button className="btn btn-primary btn-lg " onClick={handleClick2}>Edit User</button>
      </center>
      
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserProfile: () => dispatch(UserProfile()),
  };
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps===>>>>>>>", state);
  return {
    userDetails: state.userDetails.user,
  };
};

const itemStore = connect(mapStateToProps, mapDispatchToProps)(Userprofile);
export default itemStore;

