import React, { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import PaymentInfo from "../PaymentInfo/PaymentInfo";
import Shipping from "../Shipping/Shipping";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import FollowUs from "../FollowUs/FollowUs";
import './Order.scss';
import { useSelector } from "react-redux/es/exports";
import Payment from '../Payment/Payment';
import ContactInformation from "../ContactInformation/ContactInformation";
import ShippingMethod from "../ShippingMethod/ShippingMethod";


const Order = () => {
    const addCheckout = useSelector((state) => state.addCheckout);
    const [quantity, setQuantity] = useState(1);
    return (
        <main className="main-order-summary-section">
            <section className="main-order-summary-container">
                <div className="order-heading-section">
                    <h1>Order Successful!</h1>
                    <hr className="hr-divider-order" />
                </div>
                <section className="order-summary-grid-column">
                    <div className="order-number">
                        <h1 className="sub-heading-txt">Order Number #1700834</h1>
                    </div>
                    <div className="order-summary-one">
                        <ContactInformation />
                        <div className="order-add-product">

                            <p className="para-order-one">You will also receive an email with the details and we will let you know when your order has shipped.</p><br />
                            <p className="para-order-two">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                        </div>
                    </div>
                    <div className="order-summary-two">
                        <FollowUs />
                    </div>
                </section>
            </section>
        </main>
    )
}
export default Order;