import "./ShippingMethod.scss";
import Summary from "../Summary/Summary";
import edit from '../../../Assets/edit.png';
import { useForm} from 'react-hook-form';
import { useDispatch,useSelector } from "react-redux";
import { setshippingMethod } from "../../../Redux/actions/ShippingMethod";
import React, { useState }  from "react";
import { useLocation } from "react-router-dom";

const ShippingMethod = () => {
    const { pathname } = useLocation();

    const [isEditMode , toggleEditMode] = useState(false);
    const {handleSubmit } = useForm({ shouldUnregister: false });
    const shippingMethod_Store = useSelector((state) => state.shippingMethod.shippingMethod);
    const [ShippingMethod_state,Set_ShippingMethod_state]  = useState(shippingMethod_Store);
    let dispatch = useDispatch();

    const onSubmit = (data) => {
        toggleEditMode(!isEditMode);
        dispatch(setshippingMethod(ShippingMethod_state))
    }

    const onEdit = () => {
        toggleEditMode(!isEditMode);
    }

    const onchangeshippingMethod = (ev) => {

        let { value, name } = ev.target;

        Set_ShippingMethod_state(

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
            <main className="shipping-method-main-section">
                {isEditMode && pathname=== "/checkout" ?<section className="shipping-method-section-information">
                    <div className="shipping-method-section-radiobtn">
                        <div className="shipping-method-radio-text">
                            <h1>2. Shipping Method</h1>
                        </div>
                        <div className="radio-btn">
                       <form className="shipping-method-form-section" onSubmit={handleSubmit(onSubmit)}>
                                <div className="first-btn">
                                    <input type="radio" id="html" name="radiobtnmethod" checked={ShippingMethod_state.radiobtnmethod === "Standard Shipping (4-8 business days via USPS) FREE"} value="Standard Shipping (4-8 business days via USPS) FREE" onChange={onchangeshippingMethod} className="shipping-radio-btn" />
                                    <label for="html" className="shipping-method-btn-txt">Standard Shipping (4-8 business days via USPS) FREE</label>
                                </div>
                                <div className="first-btn">

                                    <input type="radio" id="html" name="radiobtnmethod" checked={ShippingMethod_state.radiobtnmethod === "Express Delivery (2-5 business days via USPS) $17.95"} value="Express Delivery (2-5 business days via USPS) $17.95" onChange={onchangeshippingMethod} className="shipping-radio-btn" />
                                    <label for="html" className="shipping-method-btn-txt">Express Delivery (2-5 business days via USPS) $17.95</label>
                                </div>
                                <div className="first-btn">

                                    <input type="radio" id="html" name="radiobtnmethod" checked={ShippingMethod_state.radiobtnmethod === "Next Day Delivery (Next business days via FedEx) $53.61"} value="Next Day Delivery (Next business days via FedEx) $53.61" onChange={onchangeshippingMethod} className="shipping-radio-btn" />
                                    <label for="html" className="shipping-method-btn-txt">Next Day Delivery (Next business days via FedEx) $53.61</label>
                                </div>
                                <button className="shipping-method-btn">CONTINUE TO PAYMENT</button>

                            </form>
                        </div>
                        <hr />

                    </div>
                </section>:
                     <section className="shipping-method-section-second">
                     <div class="shipping-method-block-second">
                         <h1>Shipping Method</h1>
                         {pathname === "/checkout" ?<img src={edit} className="edit-image" alt="editicon" onClick={()=>onEdit()} />:""}
                     </div>
                     <div className="shipping-method-content-second">
                         <p>
                            {shippingMethod_Store.radiobtnmethod}
                        </p>
                         <br />
                     </div>
                 </section>}
            </main>
        </>
    )
}

export default ShippingMethod;