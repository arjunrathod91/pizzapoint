import React from 'react'
import '../Menu/Menu.css'

function Menu() {
    const pizza = [
        {
            name:'Paneer Tikka Pizza',
            price:'200',
            rating:4.4,
            ingridient:'',
            img:''
          },
          {
            name:'Paneer Tikka Pizza',
            price:'200',
            rating:4.4,
            ingridient:'',
            img:''
          },
          {
            name:'Paneer Pan Pizza',
            price:'150',
            rating:4.4,
            ingridient:'',
            img:''
          },
          {
            name:'Paneer Supreame Pizza',
            price:'199',
            rating:4.4,
            ingridient:'',
            img:''
          }
    ]
    const burger = [
        {
            name:'Paneer Tikka Pizza',
            price:'200',
            rating:4.4,
            ingridient:'',
            img:''
          },
          {
            name:'Paneer Tikka Pizza',
            price:'200',
            rating:4.4,
            ingridient:'',
            img:''
          },
          {
            name:'Paneer Pan Pizza',
            price:'150',
            rating:4.4,
            ingridient:'',
            img:''
          },
          {
            name:'Paneer Supreame Pizza',
            price:'199',
            rating:4.4,
            ingridient:'',
            img:''
          }
    ]
  return (
    <div className='menus'>
        <div className='heading'>
            <p>Menu</p>
        </div>
        <div>
            <h3>Pizza</h3>
            <div className='tank'>
            {pizza.map((item)=>(
                <div className="dishes" item={item}>
                <img src={item.img} alt="" />
                <div className="content">
                  <div className="d1">
                    <h3>{item.name}</h3>
                    <span className="rating">{item.rating}</span>
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
        </div>
    </div>
  )
}

export default Menu
