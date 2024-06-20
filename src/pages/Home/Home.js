import React from "react";
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
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Footer from "../../components/Footer/Footer";

function Home() {

  const bestSeller = [
    {
      name:'Paneer Supreame Pizza',
      ingridient:'Campcicum,tomato,potato,onion with cheese',
      rating:3.9,
      price:'199',
      img:'/Images/veggie supreme.jpg'
    },
    {
      name:'Double Cheese Pizza',
      ingridient:'Campcicum,tomato,potato,onion with cheese',
      rating:5,
      price:'250',
      img:''
    },
    {
      name:'Chicken Pizza',
      ingridient:'Campcicum,tomato,potato,onion with cheese',
      rating:4.5,
      price:'150',
      img:''
    },
    {
      name:'Veg Crispy Burger',
      ingridient:'Campcicum,tomato,potato,onion with cheese',
      rating:4.4,
      price:'120',
      img:''
    }
  ]
  return (
    <div className="home">
      <div className="overflow">
        <div className="slider">
          <div className="s-left">
            <img src={''} alt="" />
          </div>
          <div className="s-right">
            <strong>Pizza Point</strong>
            <p>Cheesy Fun Flavour</p>
            <button>Order Now</button>
          </div>
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
          {bestSeller.map((item)=>(
            <div className="dishes" item={item}>
            <img src={item.img} alt="" />
            <div className="content">
              <div className="d1">
                <h3>{item.name}</h3>
                <span className="rating">{item.rating}<StarHalfIcon sx={{fontSize:19}}/></span>
              </div>
              <div className="d2">
                <p>{item.ingridient}</p>
                <p className="price">{item.price}.</p>
              </div>
              <div className="order">Order Now</div>
              
            </div>
          </div>
          ))}
        </div>
      </section>
      <section className="section2">
        <h2>Top Dishes</h2>
        <div className="s2-down">
          {bestSeller.map((item)=>(
            <div className="dishes" item={item}>
            <img src={item.img} alt="" />
            <div className="content">
              <div className="d1">
                <h3>{item.name}</h3>
                <span className="rating">{item.rating}<StarHalfIcon sx={{fontSize:19}}/></span>
              </div>
              <div className="d2">
                <p>{item.ingridient}</p>
                <p className="price">{item.price}.</p>
              </div>
              <div className="order">Order Now</div>
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
            <img src="https://th.bing.com/th/id/R.401e039791cb60a99db7574995b20ac5?rik=rp30JJuIzeQdWg&riu=http%3a%2f%2fwww.dailyexcelsior.com%2fwp-content%2fuploads%2f2018%2f12%2fShahrukh-Khan.jpg&ehk=6AraZHbQ%2fZ2Gti88ZqaMmCK05C74TjyOsO%2buVFCUT3I%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div>Rating</div>
            <p>Pizza Point is very good in teast. Everyone should have to try it once. It have potential to dominate Dominos</p>
          </div>
          <div className="review">
            <img src="https://th.bing.com/th/id/R.401e039791cb60a99db7574995b20ac5?rik=rp30JJuIzeQdWg&riu=http%3a%2f%2fwww.dailyexcelsior.com%2fwp-content%2fuploads%2f2018%2f12%2fShahrukh-Khan.jpg&ehk=6AraZHbQ%2fZ2Gti88ZqaMmCK05C74TjyOsO%2buVFCUT3I%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div>Rating</div>
            <p>Pizza Point is very good in teast. Everyone should have to try it once. It have potential to dominate Dominos</p>
          </div>
          <div className="review">
            <img src="https://th.bing.com/th/id/R.401e039791cb60a99db7574995b20ac5?rik=rp30JJuIzeQdWg&riu=http%3a%2f%2fwww.dailyexcelsior.com%2fwp-content%2fuploads%2f2018%2f12%2fShahrukh-Khan.jpg&ehk=6AraZHbQ%2fZ2Gti88ZqaMmCK05C74TjyOsO%2buVFCUT3I%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div>Rating</div>
            <p>Pizza Point is very good in teast. Everyone should have to try it once. It have potential to dominate Dominos</p>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Home;
