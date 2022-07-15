
import React from "react";
import "./Payment.scss";
import edit from "../../../Assets/edit.png";


const Payment=()=>{
    return(
        <section className="shipping-method-section-payment">
        <div class="shipping-method-block-payment">
            <h1>Payment Information</h1>
            <img src={edit} className="edit-image" alt="editicon" />
        </div>
        <div className="shipping-method-content-payment">
            <p>
            Credit Card <br/>Visa ending in 4567
            </p>
        </div>
    </section>
    )
}

export default Payment;