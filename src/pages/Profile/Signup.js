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
    const {setLoggedIn,profileDetails,setProfileDetails} = useContext(Context);
    const navigate = useNavigate()

    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [contact,setContact] = useState()
    const [address,setAddress] = useState()

    const handleBtn=()=>{
      // setProfileDetails({"username":username,
      //   "email":email,
      //   "password":password,
      //   "contact":contact,
      //   "address":address
      // })
      setTimeout(() => {
        console.log(profileDetails);  // Log after a slight delay
      }, 0);
      navigate('/profile')
    }

  return (
    <div className="login">
      <div className="login-box">
        <div className="header"><span>Signup</span></div>
        <div className="item">
        <label><PersonIcon sx={{fontSize:'16px'}}/></label>
          <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div  className="item">
        <label><EmailIcon sx={{fontSize:'16px'}}/></label>
          <input type="text"  placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div  className="item">
        <label><LockIcon sx={{fontSize:'16px'}}/></label>
          <input type="password"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div  className="item">
        <label><CallIcon sx={{fontSize:'16px'}}/></label>
          <input type="text" placeholder='Contact' onChange={(e)=>setContact(e.target.value)}/>
        </div>
        <div  className="item">
        <label><HomeIcon sx={{fontSize:'16px'}}/></label>
          <input type="text"  placeholder='Address' onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div className="login-btn" onClick={()=>{setLoggedIn(true);handleBtn()}}><span>Signup</span></div>
        <span onClick={()=>navigate('/login')} style={{cursor:'pointer'}}>Login ?</span>
      </div>
    </div>
  )
}

export default Signup;
