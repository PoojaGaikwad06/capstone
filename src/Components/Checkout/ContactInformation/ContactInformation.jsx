import React, { useState } from "react";
import Summary from '../../Checkout/Summary/Summary'
import SignIn from '../../Checkout/SignIn/Signin';
import './ContactInformation.scss';
import { setshippingData } from "../../../Redux/actions/ShippingInformation1";
import { useSelector, useDispatch } from 'react-redux';
import edit from '../../../Assets/edit.png';
import { useForm } from 'react-hook-form';
import ShippingMethod from "../ShippingMethod/ShippingMethod";
import PaymentInfo from "../PaymentInfo/PaymentInfo";
import AddProduct from "../AddProduct/AddProduct";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ContactInformation = () => {

    const shippingdata_store = useSelector((state) => state.shippingdata.shippingdata);
    const { pathname } = useLocation();
    const [ShippingInfo_state, Set_ShippingInfo_state] = useState(shippingdata_store);
    const { handleSubmit } = useForm({ shouldUnregister: false });
    const [isEditMode, toggleEditMode] = useState(true);


    let dispatch = useDispatch();

    const onSubmit = (data) => {
        toggleEditMode(false);
        dispatch(setshippingData(ShippingInfo_state))
    }
    const onEdit = () => {
        toggleEditMode(true);
    }
    const setShippingInfoData = (ev) => {

        let { value, name } = ev.target;

        Set_ShippingInfo_state(

            (pre) => {

                return {

                    ...pre,

                    [name]: value,

                }
            }

        )

    }

    return (
        <>
            <section className="main-contact-information_section">
                {pathname === "/checkout" ? <div className="header-main">
                    <h2 className="contact-info-heading">Checkout</h2>
                    <hr className="contact-information_divider" />
                </div> : ""}

                <div className="contact-information_grid-section" id="contact-order">
                    {pathname === "/checkout" ? <div className="contact-head-guest">
                        <h1>Guest Checkout</h1>
                    </div> : ""}
                    <div className="contact-information_guest-checkout-section">
                        {pathname === "/checkout" ? <div className="contact-information_info">

                            <h2 className="contact-information_title"> Contact Information</h2>
                            <p className="contact-information-para">We’ll use these details to keep you informed on your delivery.</p>
                        </div> : ""}
                        <div className="contact-information_forms-section">
                            <div>
                                {isEditMode && pathname === "/checkout" ? <form name="shipping-details_form" className="shipping-details_form" action="" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label className="form-labels-txt">Email</label><br />
                                        <input type="text" name="emailid" className="input-textbox-box" placeholder="abc@xyz.com" value={ShippingInfo_state.emailid} onChange={setShippingInfoData} />
                                    </div>
                                    <div>
                                        <label className="form-labels-txt">Phone Number</label><br />
                                        <input type="number" name="phonenumber" className="input-textbox" placeholder="22 222 2222" value={ShippingInfo_state.phonenumber} onChange={setShippingInfoData} />
                                    </div>
                                    <h4><b>1. Shipping Information</b></h4>
                                    <label className="form-labels-txt">Country</label><br />
                                    <select name="countryname" id="country-name" className="select-country" value={ShippingInfo_state.countryname} onChange={setShippingInfoData}>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Europe">Europe</option>
                                    </select>
                                    <div className="contact-info_form">
                                        <div className="main-lable">
                                            <label className="form-labels-txt">First Name</label>
                                            <input type="text" name="firstname" className="input-textbox" value={ShippingInfo_state.firstname} onChange={setShippingInfoData} />
                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">Last Name</label>
                                            <input type="text" name="lastname" className="input-textbox" value={ShippingInfo_state.lastname} onChange={setShippingInfoData} />
                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">Street Address</label>
                                            <input type="text" name="streetaddress" className="input-textbox" value={ShippingInfo_state.streetaddress} onChange={setShippingInfoData} />
                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">Street Address 2</label><br />
                                            <input type="text" name="streetaddress2" className="input-textbox" value={ShippingInfo_state.streetaddress2} onChange={setShippingInfoData} />
                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">City</label><br />
                                            <input type="text" name="cityname" className="input-textbox" value={ShippingInfo_state.cityname} onChange={setShippingInfoData} />
                                        </div>
                                        <div className="contact-information_state-details">
                                            <div>
                                                <label className="form-labels-txt">State</label>
                                                <select name="statename" id="state-name" className="select-state" value={ShippingInfo_state.statename} onChange={setShippingInfoData}>
                                                    <option value="California">California</option>
                                                    <option value="London">London</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="India">India</option>
                                                </select><br />
                                            </div>
                                            <div className="main-lable1">
                                                <label className="form-labels-txt">Zip Code</label>
                                                <input type="number" name="zipcode" value={ShippingInfo_state.zipcode} onChange={setShippingInfoData} />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="form-btn">CONTINUE TO SHIPPING METHOD</button>

                                </form> :
                                    <section className="shipping-method-section">
                                        <div class="shipping-method-block">
                                            <h1>Shipping Information</h1>
                                            {pathname === "/checkout" ? <img src={edit} className="edit-image" alt="editicon" onClick={() => onEdit()} /> : ""}
                                        </div>
                                        <div className="shipping-method-content">
                                            <p>
                                                <b>{ShippingInfo_state.emailid}<br />{ShippingInfo_state.phonenumber}</b>
                                            </p>

                                            <p>
                                                {ShippingInfo_state.countryname} <br />
                                                {ShippingInfo_state.firstname}&nbsp;&nbsp;{ShippingInfo_state.lastname}<br />
                                                {ShippingInfo_state.streetaddress}&nbsp;&nbsp;{ShippingInfo_state.cityname}<br />
                                                {ShippingInfo_state.statename}&nbsp;&nbsp;{ShippingInfo_state.zipcode}

                                            </p>
                                        </div>
                                    </section>}
                                <div><br />
                                    <ShippingMethod /><br />
                                    <PaymentInfo /><br />
                                    <AddProduct />
                                </div>
                            </div>
                        </div>
                        {pathname === "/checkout" ? <Link to={`/order`}>

                            <button className="placebtn">place order</button>
                            <p color="#333">By Clicking confirm order you agree to our <br/>Terms and Conditions
                            </p>
                        </Link> : ""}
                    </div>

                    {pathname === "/checkout" ? <div className="contact-information_pricing-summary-column">
                        <SignIn />
                        <Summary />
                    </div> : ""}
                </div>

            </section>

        </>
    )
}

export default ContactInformation;