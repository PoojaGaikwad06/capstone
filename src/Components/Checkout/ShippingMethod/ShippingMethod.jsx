import React from "react";
import "./ShippingMethod.scss";
import { useNavigate } from "react-router-dom";
import Summary from "../Summary/Summary";
import ShippingInfo from "../ShippingInfo/ShippingInfo";

const ShippingMethod = () => {
    let navigate = useNavigate();
    const navigateToPaymentInfo = () => {
        navigate("/payment") //navigate to cart page
    }
    return (
        <>
            <div className="main-heading-txt">
                <h1 className="main-head-ship-method">Checkout</h1>
                <hr className="hr-divider" />
            </div>

            <main className="shipping-method-main-section">
                <div className="heading-s-method">
                    <h1 className="shipping-method-guest-heading">Guest Checkout</h1>
                </div>
                <section className="shipping-method-section-information">
                    <ShippingInfo />
                    <div className="shipping-method-section-radiobtn">
                        <div className="shipping-method-radio-text">
                            <h1>2. Shipping Method</h1>
                        </div>
                        <div className="radio-btn">
                            <form className="shipping-method-form-section">
                                <div className="first-btn">
                                    <input type="radio" id="html" name="fav_language" value="HTML" className="shipping-radio-btn" />
                                    <label for="html" className="shipping-method-btn-txt">Standard Shipping (4-8 business days via USPS) FREE</label>
                                </div>
                                <div className="first-btn">

                                    <input type="radio" id="html" name="fav_language" value="HTML" className="shipping-radio-btn" />
                                    <label for="html" className="shipping-method-btn-txt">Express Delivery (2-5 business days via USPS) $17.95</label>
                                </div>
                                <div className="first-btn">

                                    <input type="radio" id="html" name="fav_language" value="HTML" className="shipping-radio-btn" />
                                    <label for="html" className="shipping-method-btn-txt">Next Day Delivery (Next business days via FedEx) $53.61</label>
                                </div>
                            </form>
                        </div>
                        <button className="shipping-method-btn" onClick={navigateToPaymentInfo}>Continue</button>
                        <hr />

                        <div className="shipping-method-txt">
                            3. Payment Information
                        </div>
                        <hr />

                    </div>
                </section>
                <section className="summary-section-method">
                    <Summary />
                </section>
            </main>
        </>
    )
}

export default ShippingMethod;