import React from "react";
import "./Summary.scss";


const Summary = () => {
    return (
        <>
            <section className="summary-container">
                <div className="summary-section">
                    <h2>Pricing Summary</h2>
                </div>
                <div className="summary-content">
                    <div className="Subtotal">
                        <p>Subtotal</p>
                    </div>
                    <div className="Subtotal-amt">
                        <p>$ 388.00</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Coupon">
                        <p>Coupon</p>
                    </div>
                    <div className="Coupon-amt">
                        <p>- $ 77.60</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Gift-Card">
                        <p>Gift Card</p>
                    </div>
                    <div className="Gift-Card-amt">
                        <p>- $ 100.00</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Estimated-tax">
                        <p>Estimated tax</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>$ 23.28</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Estimated-shipping">
                        <p>Estimated shipping</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>FREE</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Estimated-Total">
                        <p>Estimated Total</p>
                    </div>
                    <div className="Estimated-Total-amt">
                        <p>$ 233.68</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Summary;
