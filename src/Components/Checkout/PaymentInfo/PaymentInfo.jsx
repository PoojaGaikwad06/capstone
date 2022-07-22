
import React, { useState } from 'react';
import { setpaymentInfo } from '../../../Redux/actions/paymentMethod';
import { useSelector, useDispatch } from 'react-redux';
import "./PaymentInfo.scss";
import edit from '../../../Assets/edit.png';
import { useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';



const PaymentInfo = () => {
    const { pathname } = useLocation();

    const [isEditMode, toggleEditMode] = useState(false);
    // const { handleSubmit } = useForm({ shouldUnregister: false });
    const paymentInfo_Store = useSelector((state) => state.paymentInfo.paymentInfo);
    const [PaymentInfo_state, Set_PaymentInfo_state] = useState(paymentInfo_Store);
    let dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "all", defaultValues: PaymentInfo_state });






    const onSubmit = (data) => {
        toggleEditMode(!isEditMode);
        Set_PaymentInfo_state((p)=>{
            return {...data}
        })
        dispatch(setpaymentInfo(data))

        console.log("a", data);
    }

    const onEdit = () => {
        toggleEditMode(!isEditMode);
    }

    // const setFormdata = (ev) => {
        
    //     let { value, name } = ev.target;
    //     Set_PaymentInfo_state(
    //         (pre) => {
    //             return {
    //                 ...pre,
    //                 [name]: value,
    //             }


    //         }
    //     )
    // }
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
                                    <input type="text" name="holdername" className="input-textbox" 
                                      {...register('holdername', {
                                        required: 'Card Number is Required',
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Please Enter Card Name',
                                        },
                                    })}
                                    />
                                    <p style={{ color: "red" }}>{errors?.holdername?.message}</p>
                                    <br />
                                    <label className="form-labels">Credit Card Number</label><br />
                                    <input type="text" name="cno" className="input-textbox" 
                                       {...register('cno', {
                                        required: 'Credit Card No is Required',
                                        pattern: {
                                            value: /^\d{16}$/,
                                            message: 'Please Enter Credit Card No',
                                        },
                                    })}
                                    />
                                    <p style={{ color: "red" }}>{errors?.cno?.message}</p>

                                    <br />
                                    <div className="card-details">
                                        <label className="form-labels">Expiration Date</label><br />
                                        <label className="form-labels cvv-label">CVV</label><br />
                                    </div>
                                    <div className="card-details">
                                        <input type="date" name="expdate" className="input-textbox" 
                                        {...register('expdate')}
                                        /><br />
                                        <input type="text" name="cvv" className="cvv-input-textbox" 
                                             {...register('cvv', {
                                                required: 'CVV No Required',
                                                pattern: {
                                                    value: /^\d{3}$/,
                                                    message: 'Please Enter CVV No',
                                                },
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.cvv?.message}</p>

                                        <br />
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