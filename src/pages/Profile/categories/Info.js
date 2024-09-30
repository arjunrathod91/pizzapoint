import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className='info'>
      <div>
        <div className='item-sec'>
          <label className='label'>Name</label>
          <div className='item'>Arjun Rathod</div>
        </div>
        <div className='item-sec'>
          <label className='label'>Address</label>
          <div className='item'>Wadgaon Budrukh</div>
        </div>
        <div className='item-sec'>
          <label className='label'>Mobile NO.</label>
          <div className='item'>+917350887544</div>
        </div>
        <div className='item-sec'>
          <label className='label'>Password</label>
          <div className='item'>ar885209</div>
        </div>
        <div className='item-sec'>
          <label className='label'>Email Id</label>
          <div className='item'>ar885209@gmai.com</div>
        </div>
      </div>
    </div>
  )
}

export default Info
