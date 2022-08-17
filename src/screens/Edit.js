import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { config } from '../api/config';
import { connect } from 'react-redux';
import { EditProfile, UserProfile } from '../actions/user';
const Edit = ({userDetails , EditProfile}) => {
const navigation = useNavigate();
    const[useredit , setUseredit] = useState({
        name : userDetails.name,
        email : userDetails.email,
        username :userDetails.username,
        city : userDetails.city,
        mobile :userDetails.mobile
    })
 

  
  const handleUpdate =() =>{
  
  const data ={
    name:useredit.name,
    email:useredit.email,
    username:useredit.username,
    city : useredit.city,
    mobile : useredit.mobile,
    id: userDetails.id
  }
   EditProfile(data);
   navigation("/UserProfile")
  }
  return (
    <div>
        <div className='container'>
       <h1>Users Edit</h1>
       <hr></hr>
<label htmlFor="name" className="label">  Name : </label>
        <input type="text"  className="form-control " value={useredit.name} onChange={(e) =>
              setUseredit((prev) => ({ ...prev, name: e.target.value }))
            }></input>

        <label htmlFor="name" className="label">  Email : </label>
        <input type="text"  className="form-control" value={useredit.email} onChange={(e) =>
              setUseredit((prev) => ({ ...prev, email: e.target.value }))
            }></input>

        <label htmlFor="name" className="label">  User Name : </label>
        <input type="text"  className="form-control"  value={useredit.username} onChange={(e) =>
              setUseredit((prev) => ({ ...prev, username: e.target.value }))
            }></input>

        <label htmlFor="name" className="label">  City : </label>
        <input type="text"  className="form-control" value={useredit.city} onChange={(e) =>
              setUseredit((prev) => ({ ...prev, city: e.target.value }))
            }></input>

        <label htmlFor="name" className="label">  Phone no. : </label>
        <input type="text"  className="form-control" value={useredit.mobile} onChange={(e) =>
              setUseredit((prev) => ({ ...prev, mobile: e.target.value }))
            }></input><br></br>
        <button className='btn btn-dark btn-lg' onClick={handleUpdate} >Update</button>
        </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
      EditProfile: (data) => dispatch(EditProfile(data)),
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      userDetails: state.userDetails.user,
    };
  };
  
  const itemStore = connect(mapStateToProps, mapDispatchToProps)(Edit);
  export default itemStore;

