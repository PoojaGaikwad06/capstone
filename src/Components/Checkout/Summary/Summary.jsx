import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Summary.scss";


const Summary = () => {
    const ValuePercentage = (discount, price) => {


        const discountedValue = price - (price * (discount / 100));

        return discountedValue < 0 ? discountedValue : discountedValue;

    }

    const [subTotal, setSubTotal] = useState(0);

    const [coupon, setCoupon] = useState(0);

    const [giftCard, setGiftCardValue] = useState(0);

    const [estimatedTax, setEstimatedTax] = useState(0);

    const [isshippingFree, setisshippingFree] = useState(true);
    const item_cart = useSelector(store => store.addCart);
    useEffect(() => {

        let total = 0;

        item_cart.forEach(item => {
            total = total + (item.price * item.qty);

        });
        setSubTotal(total);

        setCoupon(total - ValuePercentage(20, total));

        setGiftCardValue(total > 150 ? 100 : 0);

        setEstimatedTax(total - ValuePercentage(5, total));

        setisshippingFree(total > 500);
    }, [item_cart]);

    const getEstimatedTotal = () => {

        const es = isshippingFree ? 0 : 50;

        return subTotal - coupon - giftCard + estimatedTax + es;

    }

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
                        <p>$ {subTotal.toFixed(2)}</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Coupon">
                        <p>Coupon</p>
                    </div>
                    <div className="Coupon-amt">
                        <p>$ {coupon.toFixed(2)}</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Gift-Card">
                        <p>Gift Card</p>
                    </div>
                    <div className="Gift-Card-amt">
                        <p>$ {giftCard}</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Estimated-tax">
                        <p>Estimated tax</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>$ {estimatedTax.toFixed(2)}</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Estimated-shipping">
                        <p>Estimated shipping</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>$ {isshippingFree ? 0 : 50}</p>
                    </div>
                </div>
                <div className="summary-content">
                    <div className="Estimated-Total">
                        <p>Estimated Total</p>
                    </div>
                    <div className="Estimated-Total-amt">
                        <p>$ {getEstimatedTotal().toFixed(2)}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Summary;
