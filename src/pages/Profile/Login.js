import React, { useContext } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
function Login({}) {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(Context);
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
            <input type="text" placeholder="Email" />
          </div>
          <div className="item">
            <label>
              <LockIcon sx={{ fontSize: "16px" }} />
            </label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-btn" onClick={() => setLoggedIn(true)}>
            <span>Login</span>
          </div>
          <span onClick={() => navigate("/signup")} style={{cursor:'pointer'}}>Create new account ? </span>
        </div>
    </div>
  );
}

export default Login;
