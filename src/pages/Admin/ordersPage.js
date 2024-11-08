import { useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Context } from "../../context/Context";
import "./Admin.css";
import axios from "axios";

function OrdersPage() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { allorders, setAllOrders, rightSec, setRIghtSec } =
    useContext(Context);

  // const obj = JSON.parse(localStorage.getItem("newOrder")) || [];
  const press = () => {
    setRIghtSec(false);
  };

  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [newOrders,setNewOrders] = useState({});

  const accept = () => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://pizzapointserver-1.onrender.com/allOrders");
        console.log(response.data); // Log the full response for clarity
        setAllOrders(response.data); // Set the state with the whole response if needed
      } catch (err) {
        console.error("Error fetching data:", err.message); // Log specific error details
      }
    };
    fetch();
  };

  const newOrder = () => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:8000/newOrder");
        console.log(response.data[0]); // Log the full response for clarity
        setNewOrders(response.data[0]); // Set the state with the whole response if needed
      } catch (err) {
        console.error("Error fetching data:", err.message); // Log specific error details
      }
    };
    fetch();
  };
  const cancel = () => {};

  useEffect(()=>{
    newOrder();
  },[])

  const option = () => {};

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
            <div className="detail-box">
              {/* <div>
                <img src={allorders[0].order.img}/>
              </div> */}
              <div>
                <h4>{allorders.username}</h4>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
            Total = {allorders.total}
          </div> */}
        <div>
          {/* {allorders.map((item, index) => (
            <div item={item} key={index}>
              <div>{item.username}</div>
            </div>
          ))} */}
        </div>
        <div className="btn-sec">
          <button className="accept" onClick={accept}>
            Accept
          </button>
          <button className="cancel" onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
      <div className="">
        <div>Accepted Orders</div>
        {/* {allorders.order.map((item, index) => (
          <div className="acc-ord-box" key={index}>
            <p>{item.username}</p>
          </div>
        ))} */}
        <div className="acc-ord-box"></div>
      </div>
    </div>
  );
}

export default OrdersPage;
