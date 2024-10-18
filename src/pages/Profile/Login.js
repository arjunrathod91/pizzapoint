import React, { useContext, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";

function Login({}) {
  const navigate = useNavigate();
  const { setLoggedIn,profileDetails,setProfileDetails} = useContext(Context);
  const [inputEmail,setInputEmail] = useState();
  const [inputPassword,setInputPassword] = useState()

  const handleBtn = async ()=>{
    const fetchMenu = async () => {
      try {
        // Corrected the URL with protocol
        const response = await axios.post('https://pizzapointserver-1.onrender.com/login', {
          email: inputEmail, // Use the correct keys
          password: inputPassword
        });
    
        if (response.data.success) {
          // If credentials match, navigate to /profile
          navigate('/profile');
        } else {
          // If credentials do not match, display an error message
          alert('Invalid email or password');
        }
        
        const userData = response.data;
        console.log(userData);
    
      } catch (err) {
        console.error('Error fetching menu data:', err);
      }
    };

    fetchMenu();

    setTimeout(() => {
      // console.log(inputEmail,inputPassword);
      
      // axios
      //   .post("https://pizzapointserver-1.onrender/login",inputEmail,inputPassword)
      //   .then((response) => {
      //     console.log(response.data);
      //     alert("Signup Successfully!");
      //   })
      //   .catch((error) => {
      //     console.error("There was an error", error);
      //     alert("Failed to sigup.");
      //   });
    }, 0);
    // if(profileDetails.email === inputEmail && profileDetails.password === inputPassword){
    //   navigate('/profile')
    // }
    // else{
    //   alert('invalid')
    // }
  }
  return (
    <div className="login">
        <div className="login-box">
          <div className="header">
            <span>Login</span>
          </div>
          <div className="item">
            <label>
              <EmailIcon sx={{ fontSize: "16px" }} />
            </label>
            <input type="text" placeholder="Email" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} />
          </div>
          <div className="item">
            <label>
              <LockIcon sx={{ fontSize: "16px" }} />
            </label>
            <input type="password" placeholder="Password" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} />
          </div>
            <button className="login-btn" onClick={()=>{setLoggedIn(true);handleBtn()}}>Login</button>
          <span onClick={() => navigate("/signup")} style={{cursor:'pointer'}}>Create new account ? </span>
        </div>
    </div>
  );
}

export default Login;
