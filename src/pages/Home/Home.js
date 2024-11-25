import React, { useContext, useEffect, useState } from "react";
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
import Card from "../../components/Card/Card";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const {
    sidebarOpen,
    setSidebarOpen,
    cart,
    setCart,
    total,
    setTotal,
    category,
    setCategory,
  } = useContext(Context);

  const cartObj = (item) => {
    setCart((prevCart) => {
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setTotal((prevTotal) => prevTotal + Number(item.price));
  };
  const imgSrc = [
    "https://static.vecteezy.com/system/resources/previews/023/961/870/original/pizza-banner-or-background-pizza-on-the-board-illustration-vector.jpg",
    "https://th.bing.com/th/id/OIP.FFmT5wGpju1U9siFEF8lmAHaJl?w=535&h=693&rs=1&pid=ImgDetMain",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cheese-pizza-ads-design-template-2fa7920016ef784e5897f4d95e281386_screen.jpg?ts=1691136569",
  ];

  const [sliderImg, setSliderImg] = useState(imgSrc[0]);
  const [style, setStyle] = useState({});
  const [activeIndex, setActiveIndex] = useState("0");
  const [allItems, setAllItems] = useState([]);
  const [loadMore, setLoadMore] = useState(10);

  const transition = (newImg) => {
    setStyle({
      transform: "translateX(-100%)", // Add transform effect, for example, scaling the image
      transition: "transform 0.4s ease-in-out", // Apply smooth transition
    });

    // Reset the style after the transition is complete (optional)
    // setTimeout(() => {
    //   setStyle({});
    // }, 400);
    setTimeout(() => {
      setSliderImg(newImg);
      setStyle({ transform: "translateX(0)", transition: "none" }); // Reset position after changing image
    }, 200);
  };

  const reviews = [
    {
      name:'Arjun Rathod',
      message:'Taste is unique and better than any other brands'
    },
    {
      name:'Karan Rathod',
      message:'Taste is unique and better than any other brands'
    },
    {
      name:'Karan Rathod',
      message:'Taste is unique and better than any other brands'
    }
  ]

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          "https://pizzapointserver-1.onrender.com/allItems"
        );
        setAllItems(response.data);
      } catch (err) {
        console.error("Error fetching menu data:", err);
        console.log(err);
      }
    };

    fetchMenu();
  }, []);

  const categoryClick = (item) => {
    // setTimeout(()=>{
    //   localStorage.setItem("category",category)
    // },3000)
    localStorage.setItem("category", item);
  };

  const isValidImage = (url) => {
    // Check for a valid URL structure
    return (
      typeof url === "string" && url.startsWith("http") && url.trim() !== ""
    );
  };
  return (
    <div className="home">
      <div
        className="sidebar-section"
        style={{ display: `${sidebarOpen ? "flex" : "none"}` }}
      >
        <Sidebar />
      </div>
      <div className="overflow">
        <div className="slider">
          <img src={sliderImg} style={style} />
          <div className="controls">
            <div
              className={`ball ${activeIndex === "0" ? "active" : ""}`}
              onClick={() => {
                transition(imgSrc[0]);
                setActiveIndex("0");
              }}
            ></div>
            <div
              className={`ball ${activeIndex === "1" ? "active" : ""}`}
              onClick={() => {
                transition(imgSrc[1]);
                setActiveIndex("1");
              }}
            ></div>
            <div
              className={`ball ${activeIndex === "2" ? "active" : ""}`}
              onClick={() => {
                transition(imgSrc[2]);
                setActiveIndex("2");
              }}
            ></div>
          </div>
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
          <div
            className="box"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("pizza");
              navigate("/menu");
              categoryClick("pizza");
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/311/747/non_2x/pizza-transparent-background-png.png"
              alt=""
            />
            <p>Pizza</p>
          </div>
          <div
            className="box"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("burger");
              navigate("/menu");
              categoryClick("burger");
            }}
          >
            <img src={burger} alt="" />
            <p>Burger</p>
          </div>
          <div
            className="box"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("fries");
              navigate("/menu");
              categoryClick("fries");
            }}
          >
            <img src={fries} alt="" />
            <p>Fries</p>
          </div>
          <div
            className="box"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("momos");
              navigate("/menu");
              categoryClick("momos");
            }}
          >
            <img src={momos} alt="" />
            <p>Momos</p>
          </div>
          <div
            className="box"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("sandwich");
              navigate("/menu");
              categoryClick("sandwitch");
            }}
          >
            <img src={sandwitch} alt="" />
            <p>Sandwitch</p>
          </div>
        </div>
      </section>
      <section className="section2">
        <h2>{allItems.length > 0 ? "Bestseller" : ""}</h2>
        <div className="s2-down">
          {allItems.length > 0 ? (
            allItems.slice(0, loadMore).map((item, index) =>
              item?.img && isValidImage(item.img) ? (
                // (
                <Card item={item} key={index} index={index} />
              ) : (
                // )
                ""
              )
            )
          ) : (
            <div className="loading">
              <img src="https://icon-library.com/images/burger-icon-png/burger-icon-png-1.jpg" />
              <div style={{ marginLeft: "5px" }}>Loading ...</div>
            </div>
          )}
        </div>
        {allItems.length > loadMore && (
          <div
            className="seemore"
            onClick={() => setLoadMore((prev) => prev + 10)}
            style={{}}
          >
            <label>See more</label>
            <KeyboardArrowDownIcon sx={{ fontSize: "30px" }} />
          </div>
        )}
      </section>
      {/* {allItems.length > 0 ? console.log(true) : console.log(false)} */}
      {/* <section className="section2">
        <h2>Top Dishes</h2>
        <div className="s2-down">
          {pizza.map((item, index) => (
            <Card item={item} index={index}/>
          ))}
        </div>
      </section> */}
      <section className="call-delivery">
        <img src="https://www.dominos.co.in/theme2/front/assets/banner2.webp" />
        {/* <div><img src={telephone} alt="" />
        <p className="delivery-text">Call On Delivary</p>
        </div>
        <div>
          <img src={delivary} alt="" />
          <p className="order-no">+91 7350887544</p>
        </div> */}
      </section>
      {/* <section className="contact-us">
        <div className="heads">Contact Us</div>
        <div className="cont-cont">
          <div className="div1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d571.8255378126707!2d73.83078471592587!3d18.464415178443392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295fb94e7d529%3A0xd5ad6243e01a0ecb!2sPizza%20Point!5e0!3m2!1sen!2sin!4v1732528906508!5m2!1sen!2sin"
              // width="390"
              // height="390"
              className="map"
              style={{border:'0',padding:'20px',borderRadius:'5px'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="div2">
            <div className="cont-form-cont">
              <div>
                <label>Name</label>
                <input placeholder="Enter Your Name"/>
              </div>
              <div>
                <label>Email</label>
                <input placeholder="Enter Your Email"/>
              </div>
              <div>
                <label>Message</label>
                <input className="inp" placeholder="Message"/>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="reviews">
        <div className="heads"> Reviews</div>
        <div className="block">
            {reviews.map((item,index)=>(
              <div className="review" key={index}>
              <div>
                <p>
                  {item.message}
                </p>
              </div>
              <div style={{display:'flex',width:'100%',justifyContent:'end'}}>- {item.name}</div>
            </div>
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
