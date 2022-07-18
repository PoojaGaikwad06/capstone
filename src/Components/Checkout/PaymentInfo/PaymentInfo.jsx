
import React from "react";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import Summary from "../Summary/Summary";
import "./PaymentInfo.scss";
import edit from '../../../Assets/edit.png'
import ShippingMethod from "../ShippingMethod/ShippingMethod";
import Shipping from "../Shipping/Shipping";
import { useNavigate } from "react-router-dom";

const PaymentInfo = () => {
    let navigate = useNavigate()
    const navigateToCheckout = () => {
        navigate('/details')
    }
    return (
        <section className="payment-information_section">
            <div className="first-section">
            <h1 className="head-payment-checkout">Checkout</h1>
            <hr className="paymrnt-page-divider"/>
            </div>
            <div className="payment-info_grid-section">
            <div className="left-side-txt">
                        <h1>Guest Checkout</h1>
            </div>
                <div className="payment-info_grid-details">
                    <div className="shipping-reusable-coponent">
                        <ShippingInfo /><br />
                        <Shipping />
                    </div>
                    <div id="payment-Information">
                        <h4>3. Payment Information</h4>
                        <div className="payment-information-Form-Section">
                            <form name="payment-information-Form" className="payment-information-Form">
                                <div className="payment-selection-row">
                                    <input type="radio" id="credit-payment" name="credit-payment"
                                        value="credit-payment" />
                                    <label for="credit-payment" className="payment-info-Labels">Credit</label><br></br>
                                </div>
                                <label className="form-labels">Name on Card</label><br />
                                <input type="text" name="card-holder-name" className="input-textbox" /><br />
                                <label className="form-labels">Credit Card Number</label><br />
                                <input type="text" name="country-name" className="input-textbox" /><br />
                                <div className="card-details">
                                    <label className="form-labels">Expiration Date</label><br />
                                    <label className="form-labels cvv-label">CVV</label><br />
                                </div>
                                <div className="card-details">
                                    <input type="date" name="country-name" className="input-textbox" /><br />
                                    <input type="text" name="country-name" className="cvv-input-textbox" /><br />
                                </div>
                                <div className="payment-selection-row billing-address">
                                    <input type="checkbox" id="billing-address" name="billing-address" value="Bill Address" checked />
                                    <label for="billing-address" className="payment-info-Labels">Billing adress same as shipping address</label><br></br>
                                </div>
                            </form>
                            <div className="checkout-shipping_payment-method"></div>
                            <div className="payment-info_paypal">
                                <input type="radio" id="credit-payment" name="paypal-payment"
                                    value="paypal-payment" />
                                <label for="paypal-payment" className="payment-info-Labels">Paypal</label><br></br>

                            </div>
                            <div className="checkout-shipping_payment-method"></div>
                            <div className="continue-btn">
                                <button className="form-btn" onClick={navigateToCheckout}>CONTINUE TO REVIEW ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Summary />
                </div>
            </div>

        </section>
    )

}

export default PaymentInfo;