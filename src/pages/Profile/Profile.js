import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import Orders from "./categories/Orders";
import Info from "./categories/Info";
import { LocalShipping, Person } from "@mui/icons-material";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
function Profile() {
  const [section, setSection] = useState("Orders");
  const { loggedIn, setLoggedIn } = useContext(Context);
  const renderSection = () => {
    switch (section) {
      case "Orders":
        return <Orders />;
      case "Profile":
        return <Info />;
    }
  };
  const navigate = useNavigate();
  const login = () => {
    setLoggedIn(true);
  };
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  });
  return (
    <div className="profile">
      <div className="left">
      <div className=""
        >
          <DashboardIcon />
          <span>Dashboard</span>
        </div>
        <div className="pro-sec"
          onClick={() => {
            setSection("Profile");
          }}
        >
          <Person />
          <span>Profile</span>
        </div>
        <div
        className="pro-sec"
          onClick={() => {
            setSection("Orders");
          }}
        >
          <LocalShipping />
          <span>Orders</span>
        </div>
      </div>
      <div className="right">{renderSection()}</div>
    </div>
  );
}

export default Profile;
