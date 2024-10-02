import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/logo.png";

function PaymentMethod() {
  const [paymentType,setPaymentType] = useState('');
  const billObj = JSON.parse(localStorage.getItem("newOrder")) || [];
  const navigate = useNavigate();

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
        navigate('/orderplaced');
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

  const payBill=()=>{
    if(paymentType === "Online"){
      billObj["paymentType"] = paymentType;
      handlePayment();
    }
    else{
      navigate('/orderplaced');
    }
  }

  return (
    <div>
      <div>Total Bill {billObj.total}</div>
      <div>
     <input type='radio' name='r1' style={{cursor:'pointer'}} onClick={()=>setPaymentType('COD')}/> Cash On Delivery
     </div>
     <div>
     <input type='radio' name='r1' style={{cursor:'pointer'}} onClick={()=>setPaymentType('Online')} />Pay Online
     </div>
     <button style={{cursor:'pointer'}} onClick={payBill}>Place a Order</button>
    </div>
  )
}

export default PaymentMethod
