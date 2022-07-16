import React from "react";
import Payment from "./Payment/Payment";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import Shipping from "./Shipping/Shipping";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import Summary from "./Summary/Summary";
import './Checkout.scss';
import AddProduct from './AddProduct/AddProduct';

const Checkout=()=>{
    return(
        <main className="all-items-section">
            <div className="heading-main">
            <h1 className="checkout-title-grid">Checkout</h1>
            <hr className="checkout-grid-divider"/>
            </div>
           
           
            <section className="all-items-container">
            <div className="left-side-txt">
                <h1>Guest Checkout</h1>
            </div>
                <div className="left-side-items">
                    <ShippingInfo/><br/>
                    <Shipping/><br/>
                    <Payment/>
                    <AddProduct/>
                    <button className="place-order-btn-desk">PLACE ORDER</button>

                </div>

                <div className="left-side-items">
                    <Summary/>
                    <button className="place-order-btn">PLACE ORDER</button>
                </div>
            </section>
        </main>
    )

}
export default Checkout;