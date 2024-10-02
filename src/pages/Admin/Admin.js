import React, { useContext, useEffect, useState } from "react";
import "./Admin.css";
import { AddAPhoto, Dashboard, ShoppingCart } from "@mui/icons-material";
import { Menu, useMediaQuery } from "@mui/material";
import OrdersPage from "./ordersPage";
import MenuPage from "./menuPage";
import { Context } from "../../context/Context";
import zIndex from "@mui/material/styles/zIndex";
// import DashboardPage from "./dashboardPage";

function Admin() {
  const [hover, setHover] = useState(false);
  const [page, setPage] = useState("orders");
  const { loggedIn, setLoggedIn,rightSec,setRIghtSec } = useContext(Context);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [zIndexLeft,setZiNdexLeft] = useState('1');
  const [zIndexRight,setZiNdexRight] = useState('2');
  const [width,setWidth] = useState('100%');
  const [position,setPosition] = useState('absolute');
  const [color,setColor] = useState('red')
  // const [newPage,setNewPage] = useState()
  const renderPage = () => {
    if (page === "orders") {
      return <OrdersPage/>
    // } else if (page === "dashboard") {
    //   return <DashboardPage/>
    } else if (page === "menu") {
      return <MenuPage />;
    }
  };



  return (
    <div className="admin">
      <div className="left" style={{width:'100%',position:`${isMobile ? 'absolute' : 'relative'}`,zIndex:`${rightSec ? '1' : '2'}`,top:'0px'}}>
        <div className="column" onClick={() => setPage('dashboard')}>
          <Dashboard />
          <span>Dashboard</span>
        </div>
        <div className="column" onClick={() => {setPage("orders");setRIghtSec('true')}}>
          <ShoppingCart  />
          <span>Orders</span>
        </div>
        <div className="column" onClick={() => {setPage("menu");setRIghtSec('true')}}>
          <AddAPhoto />
          <span>Add Menu</span>
        </div>
      </div>
      <div className="right" style={{width:`${width}`,zIndex:`${rightSec ? '2' : '1'}`}}>
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
