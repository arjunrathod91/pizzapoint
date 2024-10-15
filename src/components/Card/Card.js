import React, { useContext } from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Card.css";
import axios from "axios";

function Card({ item, index }) {
  const { setCart, setTotal, cart } = useContext(Context);

  const user = JSON.parse(localStorage.getItem("user"));

  const cartObj = async (item) => {
    setCart((prevCart) => {
      return [...prevCart, { ...item, quantity: 1 }];
    });

    const userUpdate = {
      username: user[0].username,
      email: user[0].email,
      password: user[0].password,
      contact: user[0].contact,
      address: user[0].address,
      cart: [...cart, { ...item, quantity: 1 }], // Include the new item in the cart
    };
    console.log(userUpdate);
    try {
      const response = await axios.put(
        "http://localhost:8000/userDetail",
        userUpdate
      );
      console.log("Cart updated successfully:", response.data);
    } catch (error) {
      console.log(error);
    }
    setTotal((prevTotal) => prevTotal + Number(item.price));
  };
  return (
    <div className="dishes" item={item} index={index}>
      <img src={item.img} alt="" />
      <div className="content">
        <div className="d1">
          <h3>{item.name}</h3>
          <span className="rating">
            {item.rating}
            <StarHalfIcon sx={{ fontSize: 19 }} />
          </span>
        </div>
        <div className="d2">
          <p>{item.ingridient.substring(0, 10)}</p>
          <p className="price">₹{item.price}</p>
        </div>
        {/* <div className="order" style={{cursor:'pointer'}} onClick={()=>navigate('https://wa.me/c/919322538480')}>Order Now</div> */}
        {/* <Link
                    className="order"
                    style={{ cursor: "pointer" }}
                    to="https://wa.me/c/919322538480"
                  >
                    Order Now
                  </Link> */}
        <button
          className="order"
          style={{ cursor: "pointer" }}
          onClick={() => cartObj(item)}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Card;
