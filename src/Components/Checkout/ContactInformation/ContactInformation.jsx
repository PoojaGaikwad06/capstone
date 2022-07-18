import React from "react";
import Summary from '../../Checkout/Summary/Summary'
import SignIn from '../../Checkout/SignIn/Signin';
import './ContactInformation.scss';
import { useNavigate } from "react-router-dom";
const ContactInformation = () => {
    let navigate=useNavigate()
    const navigateToShipping=()=>{
        navigate("/shipping") //navigate to cart page
    }
    return (
        <section className="main-contact-information_section">
            <div className="header-main">
                <h2 className="contact-info-heading">Checkout</h2>
                <hr className="contact-information_divider" />
            </div>

            <div className="contact-information_grid-section">
                <div className="contact-head-guest">
                    <h1>Guest Checkout</h1>
                </div>
                <div className="contact-information_guest-checkout-section">
                    <div className="contact-information_info">
                        
                        <h2 className="contact-information_title"> Contact Information</h2>
                        <p className="contact-information-para">We’ll use these details to keep you informed on your delivery.</p>
                    </div>
                    <div className="contact-information_forms-section">
                        <div>
                            <form name="contact-info_form" className="contact-info_form-first">
                                <div>
                                    <label className="form-labels-txt">Email</label><br />
                                    <input type="text" name="email-id" className="input-textbox-box" placeholder="abc@xyz.com" />
                                </div>
                                <div>
                                    <label className="form-labels-txt">Phone Number</label><br />
                                    <input type="number" name="phone-number" className="input-textbox" placeholder="22 222 2222" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <form name="shipping-details_form" className="shipping-details_form">
                                <h4><b>1. Shipping Information</b></h4>
                                <label className="form-labels-txt">Country</label><br />
                                <select name="country-name" id="country-name" className="select-country">
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Europe">Europe</option>
                                </select>
                                <div className="contact-info_form">
                                    <div className="main-lable">
                                        <label className="form-labels-txt">First Name</label>
                                        <input type="text" name="first-name" className="input-textbox" />
                                    </div>
                                    <div className="main-lable">
                                        <label className="form-labels-txt">Last Name</label>
                                        <input type="text" name="last-name" className="input-textbox" />
                                    </div>
                                    <div className="main-lable">
                                        <label className="form-labels-txt">Street Address</label>
                                        <input type="text" name="street-address" className="input-textbox" />
                                    </div>
                                    <div className="main-lable">
                                        <label className="form-labels-txt">Street Address 2</label><br />
                                        <input type="text" name="street-address2" className="input-textbox" />
                                    </div>
                                    <div className="main-lable">
                                        <label className="form-labels-txt">City</label><br />
                                        <input type="text" name="city-name" className="input-textbox" />
                                    </div>
                                    <div className="contact-information_state-details">
                                        <div>
                                            <label className="form-labels-txt">State</label>
                                            <select name="state-name" id="state-name" className="select-state">
                                                <option value="California">California</option>
                                                <option value="London">London</option>
                                                <option value="Canada">Canada</option>
                                                <option value="India">India</option>
                                            </select><br />
                                        </div>
                                        <div className="main-lable1">
                                            <label className="form-labels-txt">Zip Code</label>
                                            <input type="number" name="zip-code"  />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button className="form-btn" onClick={navigateToShipping}>CONTINUE TO SHIPPING METHOD</button>
                        </div>
                        <div className="two-accordian-dummy">
                        <div className="contact-information_list">
                            <h4><b>2. Shipping Method</b></h4>
                        </div>
                        <div className="contact-information_list">
                            <h4><b>3. Payment Information</b></h4>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="contact-information_pricing-summary-column">
                    <SignIn />
                    <Summary />
                </div>
            </div>
        </section>
    )
}




export default ContactInformation;