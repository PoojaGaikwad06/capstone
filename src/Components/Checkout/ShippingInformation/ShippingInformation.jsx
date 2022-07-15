
import React from "react";
import "./ShippingInformation.scss";
import { useNavigate } from "react-router-dom";


const ShippingInformation = () => {
    let navigate = useNavigate();
    const navigateToShippingMethod = () => {
        navigate("/shippingmethod") //navigate to cart page
    }
    return (
        <section className="check-out-shipping-info">
            <h1>1. Shipping Information</h1>
            <form className="checkout-shipping-form-section">
                <label className="checkout-lable-text">
                    Country*
                </label>
                <select class="checkout-sub-section-input-box" id="country-select-box-id" name="country"><option value="" hidden="" disabled="">select</option>
                    <option value="India">India</option>
                    <option value="United States of America">United States of America</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                </select>
                <label className="checkout-lable-text">
                    First Name*
                </label>
                <input className="checkout-input-box" type="text" id="lname" name="lname" />
                <label className="checkout-lable-text">
                    Last Name*
                </label>
                <input className="checkout-input-box" type="text" id="lname" name="lname" />
                <label className="checkout-lable-text">
                    Street Address*
                </label>
                <input className="checkout-input-box" type="text" id="lname" name="lname" />
                <label className="checkout-lable-text">
                    Street Address 2
                </label>
                <input className="checkout-input-box" type="text" id="lname" name="lname" />
                <label className="checkout-lable-text">
                    City*
                </label>
                <input className="checkout-input-box" type="text" id="lname" name="lname" />
                <label className="checkout-lable-text">
                    State*
                </label>
                <select class="checkout-sub-section-input-box" id="country-select-box-id" name="country"><option value="" hidden="" disabled="">select</option>
                    <option value="India">India</option>
                    <option value="United States of America">United States of America</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                </select>
                <label className="checkout-lable-text">
                    Zip*
                </label>
                <input className="checkout-input-box" type="text" id="lname" name="lname" />
            </form>
            <button className="shipping-info-btn" onClick={navigateToShippingMethod}>Continue</button>
            <hr/>

            <div className="shipping-method-txt">
            2. Shipping Method
            </div>
            <hr/>
            <div className="shipping-payment-txt">
            3. Payment Information
            </div>
            <hr/>

        </section >
    )
}

export default ShippingInformation;