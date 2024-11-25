import React, { useEffect, useState } from "react";
import "./Offers.css";
import Card from "../../components/Card/Card";
import img1 from '../../Images/im 1.jpeg'
import img2 from '../../Images/im 2.jpeg'
import img3 from '../../Images/im 3.jpeg'
import img4 from '../../Images/newoffer.png'
import axios from "axios";


function Offers() {
  const [offers,setOffers] = useState([])
  const offer = [
    {
      name: 'Veggie supreme Pizza+cheese garlic bread+cold drink [250ml]',
      price: '159',
      img: img1,
      category:'offer',
      type:'non-veg',
      tag:'chicken pizza'
  },
  {
    name: 'Veg tandoori burger+peri peri fries + 1 cold drinks0',
    price: '109',
    img: img2,
    category:'offer',
    type:'non-veg',
    tag:'chicken pizza'
},
{
  name: 'Meal for 1 [1 supreme pizza+peri peri fries+1cold drinks]',
  price: '159',
  img: img3,
  category:'offer',
  type:'non-veg',
  tag:'chicken pizza'
},
{
  name: 'Tandoori paneer pizza+veggie supreme pizza',
  price: '159',
  img: img4,
  category:'offer',
  type:'non-veg',
  tag:'chicken pizza'
},
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          "https://pizzapointserver-1.onrender.com/allItems"
        );
        setOffers(response.data.filter((item) => item.category === "offers"));
      } catch (err) {
        console.error("Error fetching menu data:", err);
        console.log(err);
      }
    };

    fetchMenu();
  }, []);
  return <div className="offer">
    <h3 style={{paddingLeft:'30px'}}>New Offers</h3>
    <div className="cont-offers">
    {offers.map((item,index) =>
            item.img ? (
              <Card item={item} key={index} index={index} />
            ) : (
              ""
            )
          )}
    </div>
  </div>;
}

export default Offers;
