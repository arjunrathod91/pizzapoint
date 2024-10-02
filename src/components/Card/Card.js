import React, { useContext } from 'react'
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../../context/Context';

function Card({item,index}) {

    const {setCart,setTotal} = useContext(Context)

    const cartObj = (item) => {
        setCart((prevCart) => {
          return [...prevCart, { ...item, quantity: 1 }];
        });
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
  )
}

export default Card
