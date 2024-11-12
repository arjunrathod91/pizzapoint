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
  const [newOrders, setNewOrders] = useState({});
  const [loading, setLoading] = useState(true);

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

  const accept = () => {
    const fetchMenu = async () => {
      try {
        // Corrected the URL with protocol
        const response = await axios.post(
          "http://localhost:8000/allOrders",
          newOrders
        );
        // const userData = response.data;
        console.log(response.data);
        setAllOrders(response.data)
      } catch (err) {
        console.error("Error fetching menu data:", err);
      }
    };

    fetchMenu();
    // setNewOrders({});
    // console.log(newOrders.order)
  };
  const cancel=()=>{
    setNewOrders({})
  }
  // const cancel = () => {};

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Start loading
      await newOrder(); // Fetch your data
      setLoading(false); // Stop loading
    }
    newOrder();
  }, []);

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
      {newOrders.order ? (<div className="new-order">
        <div className="details-sec">
          <div style={{ color: "blue", fontWeight: 500, fontSize: "12px" }}>
            Orderd by {newOrders.username}
          </div>
          <div className="user-order">
            {newOrders.order
              ? newOrders.order.map((item, index) => (
                  <div
                    className="order-item"
                    key={index}
                    style={{ fontWeight: "500" }}
                  >
                    <div>
                      {item.type == "veg" ? (
                        <>
                          <img
                            className="item-type-png"
                            src="https://clipground.com/images/veg-logo-png-6.png"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            className="item-type-png"
                            src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png"
                          />
                        </>
                      )}
                      {item.quantity} x {item.name}
                    </div>
                    <div>₹{item.price}</div>
                  </div>
                ))
              : "NO Order Yet"}
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid rgb(209, 209, 209)",
                margin: "10px 0",
              }}
            ></div>
            <div className="order-item">
              <div>
                Total Bill <span style={{ color: "red" }}>Paid</span>
              </div>
              <div>200</div>
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
          <div className=""></div>
        </div>
        <div></div>
      </div>) : "No order Yet"}
      <div>Accepted Orders</div>
      <div className="all-order-sec">
          {newOrders.order ? newOrders.order.map((item, index) => (
          <div className="acc-ord-box" key={index}>
             <div style={{ color: "blue", fontWeight: 500, fontSize: "12px" }}>
            Orderd by {newOrders.username}
          </div>
          <div className="user-order">
            {newOrders.order
              ? newOrders.order.map((item, index) => (
                  <div
                    className="order-item"
                    key={index}
                    style={{ fontWeight: "500" }}
                  >
                    <div>
                      {item.type == "veg" ? (
                        <>
                          <img
                            className="item-type-png"
                            src="https://clipground.com/images/veg-logo-png-6.png"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            className="item-type-png"
                            src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png"
                          />
                        </>
                      )}
                      {item.quantity} x {item.name}
                    </div>
                    <div>₹{item.price}</div>
                  </div>
                ))
              : "NO Order Yet"}
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid rgb(209, 209, 209)",
                margin: "10px 0",
              }}
            ></div>
            <div className="order-item">
              <div>
                Total Bill <span style={{ color: "red" }}>Paid</span>
              </div>
              <div>200</div>
            </div>
          </div>
          </div>
        )) : ''}
        {/* <div className="acc-ord-box"></div> */}
      </div>
    </div>
  );
}

export default OrdersPage;
