import React from "react";
import down from "../../Assets/down.png";
import "./CartAccordian.scss";
import "./RecentlyViewed.scss";

const CartAccordian = () => {
    return (
        <>
            <section className="ui grid container">
                <div className="cart-accordian-section">
                    <div className="cart-accordian-info">
                        <div className="cart-accordian-title">
                            <p>Estimate your Shipping</p>
                        </div>
                        <div className="cart-left-section">
                            <div className="cart-accordian-text-right">
                                <p>Shipping to 91001</p>
                            </div>
                            <div className="cart-accordian-down-arrow">
                                <img src={down} className="cart-accordian-down" />
                            </div>
                        </div>
                    </div>
                    <div className="cart-accordian-info">
                        <div className="cart-accordian-title">
                            <p>Enter a Coupon Code</p>
                        </div>
                        <div className="cart-left-section">
                            <div className="cart-accordian-text-right">
                                <p>20% discount applied</p>
                            </div>
                            <div className="cart-accordian-down-arrow">
                                <img src={down} className="cart-accordian-down" />
                            </div>
                        </div>
                    </div>
                    <div className="cart-accordian-info">
                        <div className="cart-accordian-title">
                            <p>Apply Gift Card</p>
                        </div>
                        <div className="cart-left-section">
                            <div className="cart-accordian-down-arrow">
                                <img src={down} className="cart-accordian-down" />
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </>
    );
}

export default CartAccordian;