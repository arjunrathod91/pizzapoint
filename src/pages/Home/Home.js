import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import pizza from "../../Images/pizza img 2.png";
import burger from "../../Images/burger.jpg";
import momos from "../../Images/momos.png";
import sandwitch from "../../Images/sandwitch.jpg";
import fries from "../../Images/fries.webp";
import telephone from "../../Images/telephone.png";
import delivary from "../../Images/delivery-bike.png";
import veggieSupreme from "../../Images/veggie supreme.jpg";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Context } from "../../context/Context";


function Home() {
  const navigate = useNavigate();
  const {sidebarOpen,setSidebarOpen} = useContext(Context)

  const pizza = [
    {
      name: "Classic Chicken Tikka Pizza [7 inches]",
      ingridient:
        "Onion, tomato, chicken tikka and liquid cheese and mozzarella cheese.",
      rating: 4.5,
      price: "119",
      img: "https://b.zmtcdn.com/data/dish_photos/b79/a4880f5a885b6fce43c953270c186b79.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "non-veg",
      tag: "chicken pizza",
    },
    {
      name: "Classic Chicken Sausages Pizza [7 inches]",
      ingridient: "Onion and chicken sausage.",
      rating: 5,
      price: "129",
      img: "https://b.zmtcdn.com/data/dish_photos/773/3440250afe50a97db3198b5d388ea773.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "non-veg",
      tag: "sausage pizza",
    },
    {
      name: "Chicken Sausages Pizza [7 inches]",
      ingridient:
        "Onion, capsicum, tomato,chicken sausage, black olive and mozzarella cheese.",
      rating: 4.5,
      price: "159",
      img: "https://b.zmtcdn.com/data/dish_photos/07a/e57e6b2f813576e2a6c3feb0a8c6707a.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "non-veg",
      tag: "sausage pizza",
    },
    {
      name: "Chicken Tikka Supreme Pizza [7 inches]",
      ingridient:
        "Supreme pizza with topping onion, tomato, red paprika, marinated chicken tikka and mozzarella cheese.",
      rating: 4.4,
      price: "189",
      img: "",
      category: "pizza",
      type: "non-veg",
      tag: "chicken tikka pizza",
    },
    {
      name: "Chicken Overload Pizza [7 inches]",
      ingridient:
        "Supreme pizza with topping chicken tikka, chicken sausage, chicken Pepperoni and mozzarella cheese.",
      rating: 4.4,
      price: "199",
      img: "https://b.zmtcdn.com/data/dish_photos/626/6d07c300c676281803f7b2965f1d0626.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "non-veg",
      tag: "overload pizza",
    },
    {
      name: "Chicken Peri Peri Pizza [8 inches]",
      ingridient:
        "Supreme pizza with topping onion, tomato, red paprika, marinated chicken tikka and mozzarella cheese.",
      rating: 4.4,
      price: "249",
      img: "https://b.zmtcdn.com/data/dish_photos/1c7/c57a59f2af5d87766ef4e44ce1da61c7.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "non-veg",
      tag: "chicken peri peri pizza",
    },

    {
      name: "Classic Onion Capsicum Pizza [7 inches]",
      ingridient: "Onion and capsicum.",
      rating: 4.5,
      price: "99",
      img: "https://b.zmtcdn.com/data/dish_photos/f28/ec0bffa2f90b632d33668bde27a3ff28.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "onion capsicum pizza",
    },
    {
      name: "Classic Corn Pizza [7 inches]",
      ingridient:
        "Classic and simple pizza with corn and liquid cheese and mozzarella cheese.",
      rating: 5,
      price: "89",
      img: "https://b.zmtcdn.com/data/dish_photos/11c/b54495494ecd19c157d6f98c9c03b11c.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "corn pizza",
    },
    {
      name: "Classic Paneer Pizza [7 inches]",
      ingridient: "Onion, capsicum and paneer.",
      rating: 4.5,
      price: "109",
      img: "https://b.zmtcdn.com/data/dish_photos/f5e/176bf25cbd16ba5005c965a53e1b3f5e.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "paneer pizza",
    },
    {
      name: "Margherita Pizza [7 inches]",
      ingridient:
        "Mozzarella cheese, margherita pizza is classic and simple pizza.",
      rating: 4.4,
      price: "109",
      img: "https://b.zmtcdn.com/data/dish_photos/ab3/5404204bc3c668c3548fb1a45ff56ab3.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "margherita pizza",
    },
    {
      name: "Corn and Cheese Pizza [7 inches]",
      ingridient: "Corn and mozzarella cheese.",
      rating: 4.4,
      price: "119",
      img: "https://b.zmtcdn.com/data/dish_photos/120/df9cfc3c0e1383857465819eb9ce8120.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "corn and cheese pizza",
    },
    {
      name: "A Veggie Delight Pizza [7 inches]",
      ingridient: "A Veggie Delight Pizza [7 inches]",
      rating: 4.4,
      price: "129",
      img: "https://b.zmtcdn.com/data/dish_photos/c38/465f79f24a5a27e01986656844335c38.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "veggie delight pizza",
    },

    {
      name: "Double Cheese Pizza [7 inches]",
      ingridient: "Plane pizza With extra cheese.",
      rating: 4.4,
      price: "149",
      img: "https://b.zmtcdn.com/data/dish_photos/15f/45018859b9762edc34d0a950d971d15f.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "double cheese pizza",
    },
    {
      name: "Veggie Supreme Pizza [7 inches]",
      ingridient:
        "Loaded with veggies, onion, capsicum, sweet corn, tomato, black olive and mozzarella cheese.",
      rating: 4.4,
      price: "159",
      img: "https://b.zmtcdn.com/data/dish_photos/300/ce95d93c676b8ee8d3741ed17c9ed300.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "supreme pizza",
    },
    {
      name: "Tandoori Paneer Supreme Pizza [7 inches]",
      ingridient:
        "Onion, capsicum sweet corn, paneer marinated with tandoori sauce and mozzarella cheese.",
      rating: 4.4,
      price: "179",
      img: "https://b.zmtcdn.com/data/dish_photos/413/758e613b8e1a39ff8d2ea0db34191413.png?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "tandoori paneer pizza",
    },
    {
      name: "Double Paneer Supreme Pizza [7 inches]",
      ingridient:
        "Onion, capsicum, tomato, with extra paneer pieces and mozzarella cheese.",
      rating: 4.4,
      price: "199",
      img: "https://b.zmtcdn.com/data/dish_photos/49a/f56d022322d0a28f45c534bb6a72849a.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "pizza",
      type: "veg",
      tag: "double paneer supreme pizza",
    },
    {
      name: "Spicy Overloaded Veggie Burst Pizza [8 inches]",
      ingridient:
        "Loaded with mozzarella cheese and loaded with veggies and paneer with spicy and delicious taste.",
      rating: 4.4,
      price: "250",
      img: "",
      category: "pizza",
      type: "veg",
      tag: "cheese burst pizza",
    },

    //burger

    {
      name: "Veg Grilled Burger",
      ingridient:
        "Classic veg grill burger, grilled with butter and delicious.",
      rating: 4.5,
      price: "89",
      img: "https://b.zmtcdn.com/data/dish_photos/8b4/efaa00724e4926ef0c661461b2e298b4.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "burger",
      type: "veg",
      tag: "grilled burger",
    },
    {
      name: "Veg Crispy Burger",
      ingridient: "Classic veg burger, crunchy, soft bun and delicious taste.",
      rating: 5,
      price: "79",
      img: "https://b.zmtcdn.com/data/dish_photos/0e5/09536ab0439951bd2145bc3cce5ae0e5.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "burger",
      type: "veg",
      tag: "veg crispy burger",
    },
    {
      name: "Chicken Crispy Burger",
      ingridient:
        "Classic chicken burger, crunchy chicken patty and delicious taste.",
      rating: 4.5,
      price: "89",
      img: "https://b.zmtcdn.com/data/dish_photos/2b6/6253405a4242c73fef8e07133098b2b6.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "burger",
      type: "non-veg",
      tag: "chicken crispy burger",
    },
    {
      name: "Chicken Grilled Burger",
      ingridient:
        "Classic chicken burger, grill with butter and delicious taste.",
      rating: 4.4,
      price: "99",
      img: "",
      category: "burger",
      type: "non-veg",
      tag: "grilled burger",
    },
    {
      name: "Veg Tandoori Burger",
      ingridient: "",
      rating: 4.4,
      price: "99",
      img: "99",
      category: "burger",
      type: "veg",
      tag: "tandoori burger",
    },
    {
      name: "Chicken Tandoori Burger",
      ingridient:
        "Supreme pizza with topping onion, tomato, red paprika, marinated chicken tikka and mozzarella cheese.",
      rating: 4.4,
      price: "99",
      img: "https://b.zmtcdn.com/data/dish_photos/980/d6b5406bbb13ce5e12a0c8b99969d980.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "burger",
      type: "non-veg",
      tag: "chicken pizza",
    },

    {
      name: "Veg Cheese Burger",
      ingridient:
        "A Juicy, flavourful filled with a blend of soft and Creamy cheese slice and veggies",
      rating: 4.5,
      price: "109",
      img: "https://b.zmtcdn.com/data/dish_photos/8f9/a4b07681145e12b84761753ae2a3a8f9.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "burger",
      type: "veg",
      tag: "cheese burger",
    },
    {
      name: "Chicken Cheese Burger",
      ingridient:
        "Classic and simple pizza with corn and liquid cheese and mozzarella cheese.",
      rating: 5,
      price: "129",
      img: "https://b.zmtcdn.com/data/dish_photos/615/91b05c1b0e81cf92e1d87ebfd0d67615.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "burger",
      type: "non-veg",
      tag: "chicken cheese burger",
    },
    //sandwich
    {
      name: "Mixed Veg Sandwich",
      ingridient: ".",
      rating: 4.5,
      price: "79",
      img: "https://b.zmtcdn.com/data/dish_photos/685/0cad2cf7c2b1e9e20ac59394346f8685.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "sandwich",
      type: "veg",
      tag: "veg sandwich",
    },
    {
      name: "Cheese Sandwich",
      ingridient: "",
      rating: 4.4,
      price: "99",
      img: "https://b.zmtcdn.com/data/dish_photos/abd/7ad2e065d5a3cbe9de7a34b7d2665abd.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "sandwich",
      type: "veg",
      tag: "cheese sandwich",
    },
    {
      name: "Tandoori Paneer Sandwich",
      ingridient: "",
      rating: 4.4,
      price: "109",
      img: "",
      category: "sandiwich",
      type: "veg",
      tag: "paneer sandwich",
    },
    {
      name: "Healthy Tandoori Chicken Sandwich",
      ingridient:
        "Marinated with tandoori chicken and mix veggies to give delicious taste.",
      rating: 4.4,
      price: "149",
      img: "",
      category: "sandwich",
      type: "chicken",
      tag: "chicken sandwich",
    },

    //momos

    {
      name: "Veg Steamed Momos [6 Pieces]",
      ingridient: "",
      rating: 4.5,
      price: "69",
      img: "https://b.zmtcdn.com/data/dish_photos/c0d/cea1c838a13f47d4209af4008f848c0d.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "momos",
      type: "veg",
      tag: "veg steam momos",
    },
    {
      name: "Veg Fried Momos [6 Pieces]",
      ingridient: "",
      rating: 5,
      price: "79",
      img: "https://b.zmtcdn.com/data/dish_photos/edb/48805cdff321dc253253db86625b2edb.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "momos",
      type: "veg",
      tag: "veg fried momos",
    },
    {
      name: "Chicken Steamed Momos [6 Pieces]",
      ingridient: "",
      rating: 4.5,
      price: "89",
      img: "https://b.zmtcdn.com/data/dish_photos/a70/284bcdd154db28376522a3175b4a9a70.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "momos",
      type: "non-veg",
      tag: "chicken steam momos",
    },
    {
      name: "Chicken Fried Momos [6 Pieces]",
      ingridient: "",
      rating: 4.4,
      price: "99",
      img: "https://b.zmtcdn.com/data/dish_photos/383/6289df6fc05c4ea6850beb19f5fb0383.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "momos",
      type: "non-veg",
      tag: "chicken fried momos",
    },
    {
      name: "Veg Peri Peri Fried Momos [6 Pieces]",
      ingridient:
        "Veg fried momos mixed in peri peri masala to give spicy and delicious taste.",
      rating: 4.4,
      price: "89",
      img: "https://b.zmtcdn.com/data/dish_photos/72c/d536b41b4b366298321e26dd6604972c.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "momos",
      type: "veg",
      tag: "veg peri peri momos",
    },
    {
      name: "Chicken Peri Peri Momos [6 Pieces]",
      ingridient:
        "Chicken fried momos mixed in peri peri masala to give spicy and delicious taste.",
      rating: 4.4,
      price: "109",
      img: "",
      category: "momos",
      type: "non-veg",
      tag: "chicken peri peri momos",
    },
    //snacks

    {
      name: "Cheese Garlic Bread",
      ingridient: "",
      rating: 5,
      price: "109",
      img: "",
      category: "garlic bread",
      type: "veg",
      tag: "cheese garlic bread",
    },
    {
      name: "Spicy Supreme Garlic Bread",
      ingridient: "",
      rating: 4.5,
      price: "89",
      img: "",
      category: "garlic bread",
      type: "veg",
      tag: "garlic bread",
    },

    {
      name: "Classic French Fries",
      ingridient: "",
      rating: 4.4,
      price: "79",
      img: "https://b.zmtcdn.com/data/dish_photos/09a/1b02791eaacf702d86906fa358e2d09a.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "french fries",
      type: "non-veg",
      tag: "french fries",
    },
    {
      name: "Peri Peri Masala Fries",
      ingridient: "",
      rating: 4.4,
      price: "89",
      img: "https://b.zmtcdn.com/data/dish_photos/940/cbdaa46353677768aa4151cfe177e940.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "french fries",
      type: "veg",
      tag: "french fries",
    },
    {
      name: "Cheese French Fries",
      ingridient: "",
      rating: 4.4,
      price: "109",
      img: "https://b.zmtcdn.com/data/dish_photos/3a1/e4e970bd181727ffbe25891472e223a1.jpg?fit=around|130:130&crop=130:130;*,*",
      category: "french fries",
      type: "non-veg",
      tag: "cheese french fries",
    },
    {
      name: "Crinkle French Fries",
      ingridient:
        "Crispy and golden French fries with a crunch. A popular side dish, perfect for snacking.",
      rating: 4.4,
      price: "119",
      img: "https://b.zmtcdn.com/data/dish_photos/5a2/071b2a42ef343a52f8a22f960287d5a2.png?fit=around|130:130&crop=130:130;*,*",
      category: "french fries",
      type: "non-veg",
      tag: "french fries",
    },
  ];
  return (
    <div className="home">
      <div className="sidebar-section" style={{display:`${sidebarOpen ? 'flex':'none' }`}}>
        <Sidebar/>
      </div>
      <div className="overflow">
        <div className="slider">
          <img src="https://static.vecteezy.com/system/resources/previews/023/961/870/non_2x/pizza-banner-or-background-pizza-on-the-board-illustration-vector.jpg" />
          {/* <div className="s-left">
            <img src={''} alt="" />
          </div>
          <div className="s-right">
            <strong>Pizza Point</strong>
            <p>Cheesy Fun Flavour</p>
            <button>Order Now</button>
          </div> */}
        </div>
      </div>
      <section className="section1">
        <div className="s1-up">
          <h2>Dishes</h2>
        </div>
        <div className="s1-down">
          <div className="box">
            <img src={pizza} alt="" />
            <p>Pizza</p>
          </div>
          <div className="box">
            <img src={burger} alt="" />
            <p>Burger</p>
          </div>
          <div className="box">
            <img src={fries} alt="" />
            <p>Fries</p>
          </div>
          <div className="box">
            <img src={momos} alt="" />
            <p>Momos</p>
          </div>
          <div className="box">
            <img src={sandwitch} alt="" />
            <p>Sandwitch</p>
          </div>
        </div>
      </section>
      <section className="section2">
        <h2>BestSeller</h2>
        <div className="s2-down">
          {pizza.map((item) =>
            item.img ? (
              <div className="dishes" item={item}>
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
                    <p className="price">{item.price}.</p>
                  </div>
                  {/* <div className="order" style={{cursor:'pointer'}} onClick={()=>navigate('https://wa.me/c/919322538480')}>Order Now</div> */}
                  <Link
                    className="order"
                    style={{ cursor: "pointer" }}
                    to="https://wa.me/c/919322538480"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </section>
      <section className="section2">
        <h2>Top Dishes</h2>
        <div className="s2-down">
          {pizza.map((item, index) => (
            <div className="dishes" key={index}>
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
                  <p className="price">{item.price}.</p>
                </div>
                {/* <div className="order" style={{cursor:'pointer'}} onClick={()=>navigate('https://wa.me/c/919322538480')}>Order Now</div> */}
                <Link
                  className="order"
                  style={{ cursor: "pointer" }}
                  to="https://wa.me/c/919322538480"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="call-delivery">
        {/* <div><img src={telephone} alt="" />
        <p className="delivery-text">Call On Delivary</p>
        </div>
        <div>
          <img src={delivary} alt="" />
          <p className="order-no">+91 7350887544</p>
        </div> */}
      </section>
      <section className="reviews">
        <div className="heads"> Reviews</div>
        <div className="block">
          <div className="review">
            <img
              src="https://th.bing.com/th/id/R.401e039791cb60a99db7574995b20ac5?rik=rp30JJuIzeQdWg&riu=http%3a%2f%2fwww.dailyexcelsior.com%2fwp-content%2fuploads%2f2018%2f12%2fShahrukh-Khan.jpg&ehk=6AraZHbQ%2fZ2Gti88ZqaMmCK05C74TjyOsO%2buVFCUT3I%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div>Rating</div>
            <p>
              Pizza Point is very good in teast. Everyone should have to try it
              once. It have potential to dominate Dominos
            </p>
          </div>
          <div className="review">
            <img
              src="https://th.bing.com/th/id/R.401e039791cb60a99db7574995b20ac5?rik=rp30JJuIzeQdWg&riu=http%3a%2f%2fwww.dailyexcelsior.com%2fwp-content%2fuploads%2f2018%2f12%2fShahrukh-Khan.jpg&ehk=6AraZHbQ%2fZ2Gti88ZqaMmCK05C74TjyOsO%2buVFCUT3I%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div>Rating</div>
            <p>
              Pizza Point is very good in teast. Everyone should have to try it
              once. It have potential to dominate Dominos
            </p>
          </div>
          <div className="review">
            <img
              src="https://th.bing.com/th/id/R.401e039791cb60a99db7574995b20ac5?rik=rp30JJuIzeQdWg&riu=http%3a%2f%2fwww.dailyexcelsior.com%2fwp-content%2fuploads%2f2018%2f12%2fShahrukh-Khan.jpg&ehk=6AraZHbQ%2fZ2Gti88ZqaMmCK05C74TjyOsO%2buVFCUT3I%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div>Rating</div>
            <p>
              Pizza Point is very good in teast. Everyone should have to try it
              once. It have potential to dominate Dominos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
