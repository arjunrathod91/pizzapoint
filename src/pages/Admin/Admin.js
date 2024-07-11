import React, { useState } from "react";
import "./Admin.css";
import { AddAPhoto, Dashboard, ShoppingCart } from "@mui/icons-material";
import { Menu } from "@mui/material";
import OrdersPage from "./ordersPage";
import MenuPage from "./menuPage";
import DashboardPage from "./dashboardpage";

function Admin() {
  const [hover, setHover] = useState(false);
  const [page, setPage] = useState("orders");
  // const [newPage,setNewPage] = useState()
  const renderPage = () => {
    if (page === "orders") {
      return <OrdersPage/>
    } else if (page === "dashboard") {
      return <DashboardPage/>
    } else if (page === "menu") {
      return <MenuPage />;
    }
  };
  return (
    <div className="admin">
      <div className="left">
        <div className="column" onClick={() => setPage('dashboard')}>
          <Dashboard />
          <span>Dashboard</span>
        </div>
        <div className="column" onClick={() => setPage("orders")}>
          <ShoppingCart />
          <span>Orders</span>
        </div>
        <div className="column" onClick={() => setPage("menu")}>
          <AddAPhoto />
          <span>Add Menu</span>
        </div>
      </div>
      <div className="right">
        {renderPage()}
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
