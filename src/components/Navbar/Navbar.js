import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "../Sidebar/Sidebar";
import { Context } from "../../context/Context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WestIcon from "@mui/icons-material/West";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useContext(Context);
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="logo" />
        <strong className="logo">Pizza Point</strong>
      </div>
      <div className="right">
        <div className="nav-links">
          <div
            className="nav-link hover-item"
            style={{
              borderBottom: `${
                location.pathname == "/" ? "2px solid white" : ""
              }`,
              padding: `${location.pathname == "/" ? "5px" : ""}`,
            }}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className="nav-link hover-item"
            style={{
              borderBottom: `${
                location.pathname == "/offers" ? "2px solid white" : ""
              }`,
              padding: `${location.pathname == "/offers" ? "5px" : ""}`,
            }}
          >
            <Link to="/offers">Offers</Link>
          </div>
          <div
            className="nav-link hover-item"
            style={{
              borderBottom: `${
                location.pathname == "/outlet" ? "2px solid white" : ""
              }`,
              padding: `${location.pathname == "/outlet" ? "5px" : ""}`,
            }}
          >
            <Link to="/outlet">Outlet</Link>
          </div>
          {/* <li>Meals</li>
          <li>Favorite</li>
          <li>Orders</li>
          <li>Cart</li> */}
        </div>
      </div>
      <div style={{ color: "white", gap: "5px", display: "flex" }}>
        <div
          className="hover-item"
          style={{
            backgroundColor: `${
              location.pathname == "/cart" ? "rgba(162, 162, 162, 0.274)" : ""
            }`,
          }}
        >
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
        <div
          className="hover-item"
          style={{
            backgroundColor: `${
              location.pathname == "/profile" ? "rgba(162, 162, 162, 0.274)" : ""
            }`,
          }}
        >
          <Link to="/profile">
            <PersonIcon />
          </Link>
        </div>
      </div>
      <div className="menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {location.pathname === "/" ? (
          <MenuIcon sx={{ color: "white" }} />
        ) : (
          <Link to="/">
            <WestIcon sx={{ color: "white" }} />
          </Link>
        )}
      </div>
      {open && <Sidebar />}
    </div>
  );
}

export default Navbar;
