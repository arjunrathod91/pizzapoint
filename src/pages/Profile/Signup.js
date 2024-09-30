import React, { useContext, useState } from 'react'
import './profile.css'
import { Context } from '../../context/Context';
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

function Signup() {
    const {setLoggedIn} = useContext(Context);
    const navigate = useNavigate()
  return (
    <div className="login">
      <div className="login-box">
        <div className="header"><span>Signup</span></div>
        <div className="item">
        <label><PersonIcon sx={{fontSize:'16px'}}/></label>
          <input type="text" placeholder='username' />
        </div>
        <div  className="item">
        <label><EmailIcon sx={{fontSize:'16px'}}/></label>
          <input type="text"  placeholder='Email'/>
        </div>
        <div  className="item">
        <label><LockIcon sx={{fontSize:'16px'}}/></label>
          <input type="password"  placeholder='Password'/>
        </div>
        <div  className="item">
        <label><CallIcon sx={{fontSize:'16px'}}/></label>
          <input type="text" placeholder='Contact'/>
        </div>
        <div  className="item">
        <label><HomeIcon sx={{fontSize:'16px'}}/></label>
          <input type="text"  placeholder='Address'/>
        </div>
        <div className="login-btn" onClick={()=>{setLoggedIn(true);navigate('/profile')}}><span>Signup</span></div>
        <span onClick={()=>navigate('/login')} style={{cursor:'pointer'}}>Login ?</span>
      </div>
    </div>
  )
}

export default Signup;
