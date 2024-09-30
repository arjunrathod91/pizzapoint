import React, { useContext, useState } from 'react'
import './profile.css'
import { Context } from '../../context/Context';
import { useNavigate } from "react-router-dom";

function Signup() {
    const {setLoggedIn} = useContext(Context);
    const navigate = useNavigate()
  return (
    <div className="login">
      <div className="login-box">
        <div className="header"><span>Signup</span></div>
        <div className="item">
          <label>Username </label>
          <input type="text" />
        </div>
        <div  className="item">
          <label>Email</label>
          <input type="text" />
        </div>
        <div  className="item">
          <label>Password</label>
          <input type="password" />
        </div>
        <div  className="item">
          <label>Contact</label>
          <input type="text" />
        </div>
        <div  className="item">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="login-btn" onClick={()=>{setLoggedIn(true);navigate('/profile')}}><span>Signup</span></div>
        <span onClick={()=>navigate('/login')} style={{cursor:'pointer'}}>Login ?</span>
      </div>
    </div>
  )
}

export default Signup;
