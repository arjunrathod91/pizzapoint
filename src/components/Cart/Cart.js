import React from 'react'
import './Cart.css'

function Cart() {
  return (
      <div className='add-card'>
                    <input placeholder='Title of item' />
                    <input placeholder='Ingredient' />
                    <input placeholder='url' />
                    <input placeholder='Price' />
                    <label>Type</label>
                    <div className='option'>
                            <div className='veg'><input type='radio' className='non-veg-in'/>Veg</div>
                            <div className='non-veg'><input type='radio' className='non-veg-in'/><span>Non-Veg</span></div>
                    </div>
                    <input placeholder='Category' />
                    <input placeholder='Tag' />
                    <button className='add-btn'>Add Item</button>

                </div>
  )
}

export default Cart
