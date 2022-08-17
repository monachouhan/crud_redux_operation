import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { GetRegistrationList, GetItem } from "../actions/user";
import { config } from "../api/config";
import { connect } from "react-redux";
const ViewUser = ({ GetRegistrationList }) => {
  const [data, setData] = useState([]);
   
//    console.log("token in view user page =======>>>>>>>>>.", token);
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(config.GET_REGISTRATION_LIST ,{headers: {"Authorization" : `Bearer ${token}`}})
      .then((res) => {
        console.log("result=======>", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log('err',err);
      });

 
  }, []);
console.log("data=======>>>>>...", data);
  GetRegistrationList(data);
  return (
    <div>
      <ul>
        {data.map((data) => (
          <div className="container">
            <div
              className="row"
              style={{ backgroundColor: "lightblue", marginBottom: "30px", }}
            >
              <h2>Item Details:</h2>
              <li key={data.name}>Name : {data.name}</li>
              <li key={data.email}>Email : {data.email}</li>
              <li key={data.city}>City : {data.city}</li>
            </div>
          </div>
        ))}
       
      </ul>
     
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetRegistrationList: (data) => dispatch(GetRegistrationList(data)),
  };
};
const itemStore = connect(null, mapDispatchToProps)(ViewUser);
export default itemStore;
