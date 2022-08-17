import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { GetItem } from "../actions/user";
import { config } from "../api/config";
import { connect } from "react-redux";
const ViewList = ({ GetItem }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(config.GET_ITEM)

      .then((res) => {
        console.log("result=======>", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  GetItem(data);
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
              <li key={data.address}>Address : {data.address}</li>
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
    GetItem: (addItemData) => dispatch(GetItem(addItemData)),
  };
};
const itemStore = connect(null, mapDispatchToProps)(ViewList);
export default itemStore;
