import React, { useContext } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
function Login() {
    const navigate = useNavigate()
    const {setLoggedIn} = useContext(Context)
  return (
    <div className="login">
      <div className="login-box">
        <div className="header"><span>Login</span></div>
        <div  className="item">
          <label>Email</label>
          <input type="text" />
        </div>
        <div  className="item">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="login-btn" onClick={()=>{setLoggedIn(true);navigate('/profile')}}><span>Login</span></div>
        <span onClick={()=>navigate('/signup')} style={{cursor:'pointer'}}>Create new account ? </span>
      </div>
    </div>
  );
}

export default Login;
