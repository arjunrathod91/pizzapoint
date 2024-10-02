import { useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Context } from "../../context/Context";
import "./Admin.css";

function OrdersPage() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { allorders, setAllOrders, rightSec, setRIghtSec } =
    useContext(Context);

  const obj = JSON.parse(localStorage.getItem("newOrder")) || [];
  const press = () => {
    setRIghtSec(false);
  };

  const [acceptedOrders,setAcceptedOrders] = useState([])

  const accept=()=>{
    setAcceptedOrders(prev=>[...prev,obj])
  }
  const cancel=()=>{

  }

  return (
    <div className="orders-page">
      {isMobile ? (
        <div onClick={press}>
          <ArrowBackIcon />
        </div>
      ) : (
        ""
      )}
      <h1>Orders</h1>
      <div className="new-order">
        <div className="details-sec">
          <div>
          {obj.latestOrder.map((item,index)=>(
            <div key={index} className="detail-box">
              <div>
                <img src={item.img}/>
              </div>
              <div>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div>
            Total = {obj.total}
          </div>
        {/* <div>{obj.latestOrder.map((item,index)=>(
          <div item={item} key={index}>
            <div>{item.name}</div>
            <div>{item.total}</div>

          </div>
        ))}</div> */}
        <div className="btn-sec">
          <button className="accept" onClick={accept}>Accept</button>
          <button className="cancel" onClick={cancel}>Cancel</button>
        </div>
      </div>
      <div className="">
        <div>Accepted Orders</div>
        {acceptedOrders.map((item,index)=>(
          <div className="acc-ord-box" key={index}>
            <p>{item.username}</p>
          </div>
        ))}
        <div className="acc-ord-box">

        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
