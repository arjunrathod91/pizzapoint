import React, { useContext } from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Card.css";
import axios from "axios";

function Card({ item, index }) {
  const { setCart, setTotal, cart, allorders } = useContext(Context);

  const user = JSON.parse(localStorage.getItem("user"));
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  const cartObj = async (item) => {
    setCart((prevCart) => {
      return [...prevCart, { ...item, quantity: 1 }];
    });

    if(user){
      const userUpdate = {
        username: user.username,
        email: user.email,
        password: user.password,
        contact: user.contact,
        address: user.address,
        cart: [...cart, { ...item, quantity: 1 }], // Include the new item in the cart
        order:[...user.order || []]
      };
      console.log(userUpdate);
      localStorage.setItem("user",JSON.stringify(userUpdate));
      try {
        const response = await axios.put(
          "https://pizzapointserver-1.onrender.com/userDetail",
          userUpdate
        );
        console.log("Cart updated successfully:", response.data);
      } catch (error) {
        console.log(error);
      }
    }
    else{
      console.log("user is not existed");
    }
    setTotal((prevTotal) => prevTotal + Number(item.price));
  };
  return (
    <div className="dishes" item={item} key={index}>
      <img src={item.img ? item.img : ''} alt="" />
      <div className="content">
        <div className="d1">
          <h3>{item.name}</h3>
          <span className="rating">
            {item.rating ? item.rating : ''}
            {item.rating ? <StarHalfIcon sx={{ fontSize: 19 }} /> : 'Bestseller'}
          </span>
        </div>
        <div className="d2">
          <p>{item.ingridient ? item.ingridient.substring(0, 10) : ''}</p>
          <p className="price">₹{item.price}</p>
        </div>
        <button
          className="order"
          style={{ cursor: "pointer" }}
          onClick={() => cartObj(item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
