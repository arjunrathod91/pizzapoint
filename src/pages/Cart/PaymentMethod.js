import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";
import { Context } from "../../context/Context";
import axios from "axios";

function PaymentMethod() {
  const [paymentType, setPaymentType] = useState("");
  const billObj = JSON.parse(localStorage.getItem("newOrder")) || [];
  const { cart,setCart, allorders,total } = useContext(Context);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handlePayment = () => {
    const options = {
      key: "rzp_test_HY5jMRQoTZLe2y", // Enter your Razorpay Key ID
      amount: `${billObj.total * 100}`, // Amount in paise (50000 paise = 500 INR){newPrice}
      currency: "INR",
      name: "Pizza Point",
      description: "Test Transaction",
      //   order_id:`order_${uuid.split('-')[0]}`,
      image: `${logo}`, // Optional: Add your logo URL
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
        navigate("/orderplaced");
      },
      prefill: {
        name: "Arjun", //{username}
        email: "arjunrathod@gamil.com", //{email}
        contact: "7350887544", //{contact}
      },
      notes: {
        address: "wadgaon",
      },
      theme: {
        color: "#fff",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const newOrder=()=>{

  }

  const payBill = async () => {
    const currentDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const userUpdate = {
      username: user.username,
      email: user.email,
      password: user.password,
      contact: user.contact,
      address: user.address,
      cart: cart,
      order: cart,
    };
    const userOrder = {
      username: user.username,
      email: user.email,
      password: user.password,
      contact: user.contact,
      address: user.address,
      order: cart,
      date:currentDate,
      paymentType:paymentType,
      total: total,
    };
    console.log(userOrder);
    if (paymentType === "Online") {
      handlePayment();
      setCart("");
    } else {
      navigate("/orderplaced");
      setCart("");
    }
    try {
      const response1 = await axios.put(
        "https://pizzapointserver-1.onrender.com/userDetail",
        userUpdate
      );
      // console.log("User updated successfully:", response1.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await axios.post(
        "https://pizzapointserver-1.onrender.com/newOrder",
        userOrder
      );
      console.log("the data of user sent successfully:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="payment-method">
      <div
        className="payment-box"
        style={{ display: "flex", justifyContent: "start" }}
      >
        <div className="bill">
          Total Bill : ₹<span style={{ fontWeight: "500" }}>{billObj.total}</span>
        </div>
        {cart.map((item, index) => (
          <div>
            <div className="item-box" index={index}>
              <div className="img-sec">
                <img src={item.img} />
              </div>
              <div className="info-sec">
                <label>{item.name}</label>
                <p style={{ fontSize: "14px" }}>{item.ingridient}</p>
                <label>₹{item.price}</label>
              </div>
            </div>
          </div>
        ))}
        <div className="ptype">
          <div className="payment-type">
            <input
              type="radio"
              name="r1"
              style={{ cursor: "pointer" }}
              onClick={() => setPaymentType("COD")}
            />{" "}
            Cash On Delivery
          </div>
          <div className="payment-type">
            <input
              type="radio"
              name="r1"
              style={{ cursor: "pointer" }}
              onClick={() => setPaymentType("Online")}
            />
            Pay Online
          </div>
          <div className="continew" onClick={payBill}>
            Place a Order
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
