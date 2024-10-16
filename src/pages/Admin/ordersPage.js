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

  const accept = async () => {
    // setAcceptedOrders(prev=>[...prev,allorders])
    // try {
    //   const response = await axios.get("http://localhost:8000/allOrders"); // Adjust the URL if necessary
    //   console.log(response.data); // Update state with fetched data
    //   setAllOrders(response.data);
    // } catch (err) {
    //   console.error("Error fetching data:", err);
    //   console.log(err);
    // }
  };
  const cancel = () => {};

  useEffect(()=>{
    const fetch=async()=>{
      try {
        const response = await axios.get("https://pizzapointserver-1.onrender.com/allOrders"); // Adjust the URL if necessary
        console.log(response.data[0]); // Update state with fetched data
        setAllOrders(response.data[0]);
      } catch (err) {
        console.error("Error fetching data:", err);
        console.log(err);
      }
    }
    fetch();
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
        {allorders.order.map((item, index) => (
          <div className="acc-ord-box" key={index}>
            <p>{item.username}</p>
          </div>
        ))}
        <div className="acc-ord-box"></div>
      </div>
    </div>
  );
}

export default OrdersPage;
