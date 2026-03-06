import React, { useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import "./Orders.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMediaQuery } from "@mui/material";

function Orders({setSection}) {
  const { allorders, setAllOrders, rightSec, setRIghtSec } =
    useContext(Context);
  const isMobile = useMediaQuery("(max-width:600px)");
  const list = [];
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="orders">
      {isMobile ? (
        <div onClick={() => setRIghtSec(false)}>
          <ArrowBackIcon />
        </div>
      ) : (
        ""
      )}
      <div style={{padding:'20px'}}>
      <div>Recent Orders</div>
      <div className="order-box" style={{cursor:'pointer'}} onClick={()=>setSection("OrderPage")}>
        {user.order ? user.order.map((item,index)=>(
         <div className="order-item-box">
          <div className="order-detail-box"><span>Total:{item.total}</span><div style={{display:'flex',gap:'20px'}}><span>{item.date.date}</span> <span>{item.date.time}</span></div></div>
          {item.order ? item.order.map((item,index)=>(
            <div className="all-item-detail">
              <div>
                {item.name}
              </div>
              <div>
              {item.price}
              </div>
            </div>
          )):'no order'}
         </div>
        )):<div>You havn't order anthing</div>}
          </div>
      </div>
    </div>
  );
}

export default Orders;
