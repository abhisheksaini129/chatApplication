import React, { useState } from 'react';
import "./join.css"
import logo from "../../images/logo.jpg";
import { Link } from 'react-router-dom';
let user;

const sendUser=()=>{
    user=document.getElementById('joinInput').value;
    console.log(user);
}

const Join = () => {
    const [name,setname] = useState("");
    console.log(name);
  return(
   <div className = "JoinPage">
       <div className="JoinContainer">
       <img src={logo} alt="logo"/>
       <h1> BHU - Connect </h1>
       <input onChange={(e)=>setname(e.target.value)} type="text" id="joinInput" placeholder='Enter your name' />
       <Link onClick={(e)=>!name?e.preventDefault():null} to="/chat"><button onClick={sendUser} className="joinBtn">login In</button> </Link>
       </div>
      
  </div>
  )
};

export default Join;
export {user};