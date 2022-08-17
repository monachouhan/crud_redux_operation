import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { AddItem } from "../actions/user";
const AddItemUser = ({AddItem}) => {

      const navigation = useNavigate();
    const [item , setItem] = useState({
        name :'',
        googleReviews :'',
        googleRating :0,
        itemNumber :0,
        description :'',
        address :'',
        city :'',
        state :'',
        zipCode :'',
        userId :'',
        itineraryId :'',
        itineraryDayId :'',
        location :[0]
    })

    const handleSubmit =(e) =>{
  e.preventDefault();

  const {name , googleReviews , googleRating ,itemNumber, description, address, city, state , country,zipCode, userId ,itineraryId, itineraryDayId , location} = item;

  if(name =="")
  alert("this field is required");
  
  else if(googleReviews =="")
  alert("this field is required");

  else if(googleRating =="")
  alert("this field is required");

  else if(itemNumber =="")
  alert("this field is required");


  else if(description =="")
  alert("this field is required");

  else if(address =="")
  alert("this field is required");

  else if(city =="")
  alert("this field is required");

  else if(state =="")
  alert("this field is required");

  else if(country =="")
  alert("this field is required");

  else if(zipCode =="")
  alert("this field is required");

  else if(userId =="")
  alert("this field is required");

  else if(itineraryId =="")
  alert("this field is required");

  else if(itineraryDayId =="")
  alert("this field is required");

  else if(location =="")
  alert("this field is required");
  
  else{
    let newItem ={
        name : item.name,
        googleReviews : item.googleReviews,
        googleRating : item.googleRating,
        itemNumber : item.itemNumber,
        description : item.description,
        address : item.address,
        city :item.city,
        state : item.state,
        country : item.country,
        zipCode : item.zipCode,
        userId: item.userId,
        itineraryId: item.itineraryId,
        itineraryDayId: item.itineraryDayId,
        location :  [item.location]

    }
    AddItem(newItem)  
    console.log("newItem=====>",newItem);
   
  setItem((prev) => ({ ...prev, name : '', googleReviews: "", googleRating: "",  itemNumber: "",  description: "", address: "",city: "", state :'' ,country :'', zipCode :'' , userId :'', itineraryId :'', itineraryDayId :'', location :''}));

  }
    }

    const handleViewList =() =>{
      navigation("/ViewList")

    }
  return (
    <div>
     <form> 
        <h1>Add item in the List ....</h1>
        <div className='container'>
        <label htmlFor='name' className='label'>Name</label>
        <input type ="text" placeholder='Enter the name' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, name: e.target.value }))
            }></input>

        <label htmlFor='googlereview' className='label'>Google Review</label>
        <input type ="text" placeholder='Enter google review' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, googleReviews: e.target.value }))
        }></input>

        <label htmlFor='googlerating' className='label'>Google Rating</label>
        <input type ="number" placeholder='rating...' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, googleRating: Number(e.target.value) }))}></input>

        <label htmlFor='item number' className='label'>Item Number</label>
        <input type ="number"  placeholder='Enter item number' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, itemNumber: Number(e.target.value )}))}></input>

        <label htmlFor='desc' className='label'>Description</label>
        <textarea placeholder='Enter description' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, description: e.target.value }))}></textarea>

        <label htmlFor='address' className='label'>Address</label>
        <input type ="text" placeholder='Enter the address' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, address: e.target.value }))}></input>

        <label htmlFor='name' className='label'>City</label>
        <input type ="text" placeholder='Enter the name' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, city: e.target.value }))}></input>

        <label htmlFor='state' className='label'>State</label>
        <input type ="text" placeholder='Enter the state name' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, state: e.target.value }))}></input>

        <label htmlFor='country' className='label'>Country</label>
        <input type ="text" placeholder='Enter the country name' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, country: e.target.value }))}></input>

        <label htmlFor='zipcode' className='label'>Zip Code</label>
        <input type ="text" placeholder='Enter the zip code' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, zipCode: e.target.value }))}></input>

        <label htmlFor='userid' className='label'>User Id</label>
        <input type ="text" placeholder='Enter the user id' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, userId: e.target.value }))}></input>

        <label htmlFor='itineraryid' className='label'>Itinerary Id</label>
        <input type ="text" placeholder='Enter the itinerary id' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, itineraryId: e.target.value }))}></input>

        
        <label htmlFor='itinerarydayid' className='label'>Itinerary Day Id</label>
        <input type ="text" placeholder='Enter the itinerary day id' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, itineraryDayId: e.target.value }))}></input>


        <label htmlFor='location' className='label'>Location</label>
        <input type ="number" placeholder='Enter your location' className="form-control" onChange={(e) =>
              setItem((prev) => ({ ...prev, location: Number(e.target.value) }))}></input>
  <br></br>
<button className='btn btn-success btn-lg' onClick={handleSubmit}>Submit &#9989;</button>&nbsp; &nbsp;&nbsp; &nbsp;
<button className='btn btn-danger btn-lg' onClick={handleViewList} >View List &#127773;</button>

        </div>

      
        </form>
    </div>
  )
}

const mapDispatchToProps =(dispatch)=>{
      return{
          AddItem: (addItemData) =>dispatch(AddItem(addItemData)),
      }   
  }
  const itemStore = connect(null , mapDispatchToProps)(AddItemUser)
  export default itemStore
// export default AddItem
