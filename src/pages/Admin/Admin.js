import React, { useState } from 'react'
import './Admin.css'
import { AddAPhoto, Dashboard, ShoppingCart } from '@mui/icons-material';
import Cart from '../../components/Cart/Cart';

function Admin() {
    const [card,setCart] = useState(false)
    return (
        <div className='admin'>
            <div className='left'>
                <div className='column'>
                    <Dashboard />
                    <span>Dashboard</span>
                </div>
                <div className='column'>
                    <ShoppingCart />
                    <span>Orders</span>
                </div>
                <div className='column'>
                    <AddAPhoto />
                    <span>Add Menu</span>
                </div>
            </div>
            <div className='right'>
                <div className='add-column' onClick={()=>setCart(true)}>
                    <AddAPhoto />
                    <span>Add Category</span>
                </div>
            </div>
            {/* {cart && <Cart/>} */}
        </div>
    )
}

export default Admin;
