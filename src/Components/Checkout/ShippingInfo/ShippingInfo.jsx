
import React from "react";
import "./ShippingInfo.scss";
import edit from "../../../Assets/edit.png";


const ShippingInfo = () => {
    return (
        <section className="shipping-method-section">
            <div class="shipping-method-block">
                <h1>Shipping Information</h1>
                <img src={edit} className="edit-image" alt="editicon" />
            </div>
            <div className="shipping-method-content">
                <p>
                    q_farhan@gmail.com <br />+1 (555) 229-3367
                </p>
                <br />
                <p>
                    Qadim Farhan <br />1098 Wapello Street<br /> Altadena, California 91001<br /> United States
                </p>
            </div>
        </section>
    )
}

export default ShippingInfo;