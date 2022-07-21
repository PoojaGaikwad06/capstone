
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setpaymentInfo } from '../../../Redux/actions/paymentMethod';
//  redux/actions/paymentMethod'; 
import { useSelector, useDispatch } from 'react-redux';
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import "./PaymentInfo.scss";
import edit from '../../../Assets/edit.png';
import { useLocation } from "react-router-dom";


const PaymentInfo = () => {
    const { pathname } = useLocation();

    const [isEditMode, toggleEditMode] = useState(false);
    const { handleSubmit } = useForm({ shouldUnregister: false });
    const paymentInfo_Store = useSelector((state) => state.paymentInfo.paymentInfo);
    const [PaymentInfo_state, Set_PaymentInfo_state] = useState(paymentInfo_Store);
    let dispatch = useDispatch();

    const onSubmit = (data) => {
        toggleEditMode(!isEditMode);
        dispatch(setpaymentInfo(PaymentInfo_state))

        console.log("a", data);
    }

    const onEdit = () => {
        toggleEditMode(!isEditMode);
    }

    const setFormdata = (ev) => {
        
        let { value, name } = ev.target;
        Set_PaymentInfo_state(
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
            {isEditMode ? <section className="payment-information_section">

                <div className="payment-info_grid-section">

                    <div className="payment-info_grid-details">

                        <div id="payment-Information">
                            <h4>3. Payment Information</h4>
                            <div className="payment-information-Form-Section">
                                <form name="payment-information-Form" className="payment-information-Form" action="" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="payment-selection-row">
                                        <input type="radio" id="credit-payment" name="p"
                                            value="credit-payment" />
                                        <label for="credit-payment" className="payment-info-Labels">Credit</label><br></br>
                                    </div>
                                    <label className="form-labels">Name on Card</label><br />
                                    <input type="text" name="holdername" className="input-textbox" value={PaymentInfo_state.holdername} onChange={setFormdata} /><br />
                                    <label className="form-labels">Credit Card Number</label><br />
                                    <input type="text" name="cno" className="input-textbox" value={PaymentInfo_state.cno} onChange={setFormdata}/><br />
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

                                    <div className="checkout-shipping_payment-method"></div>
                                    <div className="payment-info_paypal">
                                        <input type="radio" id="credit-payment" name="paypal-payment"
                                            value="paypal-payment" />
                                        <label for="paypal-payment" className="payment-info-Labels">Paypal</label><br></br>

                                    </div>
                                    <div className="checkout-shipping_payment-method"></div>
                                    <div className="continue-btn">
                                        <button className="form-btn">CONTINUE TO REVIEW ORDER</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </section> :
                <section className="shipping-method-section-payment">
                    <div class="shipping-method-block-payment">
                        <h1>Payment Information</h1>
                        {pathname === "/checkout" ? <img src={edit} className="edit-image" alt="editicon" onClick={() => onEdit()} />:""}
                    </div>
                    <div className="shipping-method-content-payment">
                        <p>
                        {PaymentInfo_state.holdername} <br />{PaymentInfo_state.cno}
                        </p>
                    </div>
                </section>}
        </>
    )

}

export default PaymentInfo;