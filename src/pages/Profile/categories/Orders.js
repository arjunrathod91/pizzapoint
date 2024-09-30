import React, { useContext } from 'react'
import { Context } from '../../../context/Context'
import './Orders.css'

function Orders() {
  const {allorders,setAllOrders} = useContext(Context)
  const list = []
  return (
    <div className='orders'>
      Order
      {allorders.map((item,index)=>(<>
        <div className="item-box" index={index}>
                <div className="img-sec">
                  <img src={item.img} />
                </div>
                <div className="info-sec">
                  <strong>{item.name}</strong>
                  <p>{item.ingridient}</p>
                  <h2>₹{item.price}</h2>
                  <p>{item.type}</p>
                </div>
              </div>
      </>))}
    </div>
  )
}

export default Orders
