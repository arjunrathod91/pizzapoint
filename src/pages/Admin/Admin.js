import React, { useState } from "react";
import "./Admin.css";
import { AddAPhoto, Dashboard, ShoppingCart } from "@mui/icons-material";
import Cart from "../../components/Cart/Cart";
import Orders from "./Orders";
import { Menu } from "@mui/material";

function Admin() {
  const [card, setCart] = useState(false);
  const [hover, setHover] = useState(false);
  const [page, setPage] = useState("Orders");
  // const [newPage,setNewPage] = useState()
  const renderPage = () => {
    if (page === "orders") {
      return <Orders />;
    } else if (page === "dashboard") {
      return <Dashboard />;
    } else if (page === "menu") {
      return <Menu />;
    }
  };
  return (
    <div className="admin">
      <div className="left">
        <div className="column" onClick={() => setPage("Dashboard")}>
          <Dashboard />
          <span>Dashboard</span>
        </div>
        <div className="column" onClick={() => setPage("Orders")}>
          <ShoppingCart />
          <span>Orders</span>
        </div>
        <div className="column" onClick={() => setPage("Menu")}>
          <AddAPhoto />
          <span>Add Menu</span>
        </div>
      </div>
      <div className="right">
        {renderPage}
        {/* <div className='add-column' onClick={()=>setCart(true)}>
                    <AddAPhoto />
                    <span>Add Category</span>
                </div> */}
      </div>
      {/* {cart && <Cart/>} */}
    </div>
  );
}

export default Admin;
