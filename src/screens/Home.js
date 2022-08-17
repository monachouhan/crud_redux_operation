import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';

const Home = () => {
    const navigation = useNavigate();
    
    const handleClick =() =>{
        navigation("/Register");
    }

    const handleLogin = ()=>{
      navigation("/Login");
    }
  return (
    <div className='container'>
        <h1>Welcome to this page</h1><br></br>
  <button className='btn btn-primary' onClick={handleClick}>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className='btn btn-primary' onClick={handleLogin}>Login</button>


    </div>
  )
}

export default Home