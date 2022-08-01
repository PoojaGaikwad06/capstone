
import React from "react";
import "./Shipping.scss";
import edit from "../../../Assets/edit.png";


const Shipping = () => {
    return (
        <section className="shipping-method-section-second">
            <div class="shipping-method-block-second">
                <h1>Shipping Method</h1>
                <img src={edit} className="edit-image" alt="editicon" />
            </div>
            <div className="shipping-method-content-second">
                <p>
                    Standard Shipping <br />
                    Est. delivery in 4 - 8 business days <br />FREE</p>
                <br />
            </div>
        </section>
    )
}

export default Shipping;