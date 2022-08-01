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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContactInformation = () => {
    const shippingMethod_Store = useSelector((state) => state.shippingMethod.shippingMethod);
    const paymentInfo_Store = useSelector((state) => state.paymentInfo.paymentInfo);
    const shippingdata_store = useSelector((state) => state.shippingdata.shippingdata);
    const [placeorderflag, Set_placeorderflag] = useState({ ...shippingdata_store, ...shippingMethod_Store, ...paymentInfo_Store });
    useEffect(() => {
        Set_placeorderflag(() => {
            return {
                ...shippingdata_store, ...shippingMethod_Store, ...paymentInfo_Store
            }
        });
    }, [shippingdata_store, shippingMethod_Store, paymentInfo_Store])

    const toggle = () => {
        let flag = false;
        for (let key in placeorderflag) {
            if (key !== 'streetaddress2' && !placeorderflag[key]) {
                flag = true;
                break;

            }
        }

        return flag;

    }
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [ShippingInfo_state, Set_ShippingInfo_state] = useState(shippingdata_store);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "all", defaultValues: ShippingInfo_state });



    const [isEditMode, toggleEditMode] = useState(true);


    let dispatch = useDispatch();

    const onSubmit = (data) => {
        toggleEditMode(false);
        Set_ShippingInfo_state(
            (pre) => {
                return { ...data };
            }
        );
        dispatch(setshippingData(data))
    }
    const onEdit = () => {
        toggleEditMode(true);
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
                                    <div className="con-main-container">
                                        <div className="input-con">
                                            <label className="form-labels-txt">Email</label><br />
                                            <input type="text" name="emailid" className="input-textbox-box" placeholder="abc@xyz.com"
                                                {...register('emailid', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: 'Enter Valid Email',
                                                    },
                                                })} />
                                            <p style={{ color: "red" }}>{errors?.emailid?.message}</p>
                                        </div>
                                        <div className="input-con">
                                            <label className="form-labels-txt">Phone Number</label><br />
                                            <input type="number" name="phonenumber" className="input-textbox" placeholder="22 222 2222"
                                                {...register('phonenumber', {
                                                    required: 'Phone Number is required',
                                                    pattern: {
                                                        value: /^[6-9]\d{9}$/,
                                                        message: 'Enter Valid Phone No',
                                                    },
                                                })} />
                                            <p style={{ color: "red" }}>{errors?.phonenumber?.message}</p>
                                        </div>
                                    </div>
                                    <h4><b>1. Shipping Information</b></h4>
                                    <label className="form-labels-txt">Country</label><br />
                                    <select name="countryname" id="country-name" className="select-country"
                                        {...register('countryname', {
                                            required: 'Country Name is required',
                                            pattern: {
                                                value: /^[A-Za-z ]+$/,
                                                message: 'Enter Country Name',
                                            },
                                        })}>
                                        <option value="Select">Select</option>
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                    </select>
                                    <p style={{ color: "red" }}>{errors?.countryname?.message}</p>

                                    <div className="contact-info_form">
                                        <div className="main-lable">
                                            <label className="form-labels-txt">First Name</label>
                                            <input type="text" name="firstname" className="input-textbox"
                                                {...register('firstname', {
                                                    required: 'First Name is Required',
                                                    pattern: {
                                                        value: /^[A-Za-z ]+$/,
                                                        message: 'Enter First Name',
                                                    },
                                                })} />
                                            <p style={{ color: "red" }}>{errors?.firstname?.message}</p>
                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">Last Name</label>
                                            <input type="text" name="lastname" className="input-textbox"
                                                {...register('lastname', {
                                                    required: 'Last Name is Required',
                                                    pattern: {
                                                        value: /^[A-Za-z ]+$/,
                                                        message: 'Enter Last Name',
                                                    },
                                                })} />
                                            <p style={{ color: "red" }}>{errors?.lastname?.message}</p>

                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">Street Address</label>
                                            <input type="text" name="streetaddress" className="input-textbox"
                                                {...register('streetaddress', {
                                                    required: 'Street Address is Required',
                                                    pattern: {
                                                        value: /^[A-Za-z ]+$/,
                                                        message: 'Enter Street Address',
                                                    },
                                                })}
                                            />
                                            <p style={{ color: "red" }}>{errors?.streetaddress?.message}</p>

                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">Street Address 2</label><br />
                                            <input type="text" name="streetaddress2" className="input-textbox"
                                                {...register('streetaddress2')}
                                            />
                                        </div>
                                        <div className="main-lable">
                                            <label className="form-labels-txt">City</label><br />
                                            <input type="text" name="cityname" className="input-textbox"
                                                {...register('cityname', {
                                                    required: 'City Name is Required',
                                                    pattern: {
                                                        value: /^[A-Za-z ]+$/,
                                                        message: 'Enter City Name',
                                                    },
                                                })}
                                            />
                                            <p style={{ color: "red" }}>{errors?.cityname?.message}</p>
                                        </div>
                                        <div className="contact-information_state-details">
                                            <div>
                                                <label className="form-labels-txt">State</label>
                                                <select name="statename" id="state-name" className="select-state"
                                                    {...register('statename', {
                                                        required: 'State Name is Required',
                                                        pattern: {
                                                            value: /^[A-Za-z ]+$/,
                                                            message: 'Enter State Name',
                                                        },
                                                    })}
                                                >
                                                    <option value="Select">Select</option>
                                                    <option value="AP">Andhra Pradesh</option>
                                                    <option value="AN">Andaman and Nicobar Islands</option>
                                                    <option value="AP">Andhra Pradesh</option>
                                                    <option value="AR">Arunachal Pradesh</option>
                                                    <option value="AS">Assam</option>
                                                    <option value="BR">Bihar</option>
                                                    <option value="CH">Chandigarh</option>
                                                    <option value="CT">Chhattisgarh</option>
                                                    <option value="DN">Dadra and Nagar Haveli</option>
                                                    <option value="DD">Daman and Diu</option>
                                                    <option value="DL">Delhi</option>
                                                    <option value="GA">Goa</option>
                                                    <option value="GJ">Gujarat</option>
                                                    <option value="HR">Haryana</option>
                                                    <option value="HP">Himachal Pradesh</option>
                                                    <option value="JK">Jammu and Kashmir</option>
                                                    <option value="JH">Jharkhand</option>
                                                    <option value="KA">Karnataka</option>
                                                    <option value="KL">Kerala</option>
                                                    <option value="LA">Ladakh</option>
                                                    <option value="LD">Lakshadweep</option>
                                                    <option value="MP">Madhya Pradesh</option>
                                                    <option value="MH">Maharashtra</option>
                                                    <option value="MN">Manipur</option>
                                                    <option value="ML">Meghalaya</option>
                                                    <option value="MZ">Mizoram</option>
                                                    <option value="NL">Nagaland</option>
                                                    <option value="OR">Odisha</option>
                                                    <option value="PY">Puducherry</option>
                                                    <option value="PB">Punjab</option>
                                                    <option value="RJ">Rajasthan</option>
                                                    <option value="SK">Sikkim</option>
                                                    <option value="TN">Tamil Nadu</option>
                                                    <option value="TG">Telangana</option>
                                                    <option value="TR">Tripura</option>
                                                    <option value="UP">Uttar Pradesh</option>
                                                    <option value="UT">Uttarakhand</option>
                                                    <option value="WB">West Bengal</option>
                                                </select>
                                                <p style={{ color: "red" }}>{errors?.statename?.message}</p>

                                                <br />
                                            </div>
                                            <div className="main-lable1">
                                                <label className="form-labels-txt">Zip Code</label>
                                                <input type="number" name="zipcode"
                                                    {...register('zipcode', {
                                                        required: 'Zip Code is Required',
                                                        pattern: {
                                                            value: /[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}/,
                                                            message: 'Enter Valid Zip',
                                                        },
                                                    })} />
                                                <p style={{ color: "red" }}>{errors?.zipcode?.message}</p>

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
                        {pathname === "/checkout" ?
                            <>
                                <button className="placebtn" disabled={toggle()} onClick={() => navigate('/order')}>place order</button>
                                <p color="#333">By Clicking confirm order you agree to our <br />Terms and Conditions
                                </p>
                            </> : ""}
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