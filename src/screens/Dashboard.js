import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
const navigate = useNavigate();
    const handleClick=() =>{
   navigate("/UserProfile")
    }
  return (
    <div>
        <h3>Welcome to Dashboard </h3>
            
        <button style={{marginLeft : "20px"}}>CreateItineraryId</button>

        <button style={{marginLeft : "20px"}}>CreateList</button>
        <button style={{marginLeft : "50%" , fontSize:"50px"  }} onClick={handleClick}>&#128100;</button>
    </div>
  )
}

export default Dashboard