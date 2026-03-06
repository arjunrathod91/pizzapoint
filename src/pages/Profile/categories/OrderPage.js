import React from 'react'

function OrderPage() {
  return (
    <div>
      OrderPage
      <div className="item-box">
              <span>Total : $234</span>
              <span>3:44pm | 21/12/2004</span>
              <span>Map Orders</span>
              <div>
                <span>Timeline</span>
                <span>Order time :</span>
                <span>Accepted Time :</span>
                <span>Preparing Time :</span>
                <span>Delived Time :</span>
              </div>
              {/* <span>Timeline</span> */}
              {/*Map Orders*/}
              {/* <div className="img-sec">
                <img src=""/>
              </div>
              <div className="info-sec">
                <strong></strong>
                <p></p>
                <h2></h2>
                <p></p>
                <p></p>
              </div> */}
            </div>
      <button>Cancel Order</button>
    </div>
  )
}

export default OrderPage
