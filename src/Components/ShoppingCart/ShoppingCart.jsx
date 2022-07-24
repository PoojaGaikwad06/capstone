import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import CartAccordian from "../ShoppingCart/CartAccordian";
import RecentlyViewed from "./RecentlyViewed";
import PricingSummary from "./PricingSummary";
import "./ShoppingCart.scss";
import edit from "../../Assets/edit.png";
import heart1 from "../../Assets/heart1.png";
import remove from "../../Assets/remove.png";
import plus from "../../Assets/plus.png";
import minus from "../../Assets/minus.png";
import {Link} from 'react-router-dom';
// import { removeSelectedProduct } from "../../Redux/actions/ProductAction";

const ShoppingCart = () => {
    const addCart = useSelector((state) => state.addCart);
    //Quantity IncDec start
    const [quantity, setQuantity] = useState(1);
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1); // decrement quantity

        }
    }

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1); // increment quantity
        }
    }
    //Quantity IncDec End

    // const removeitem = (item) => {
    //     dispatch(removeSelectedProduct(item));
    // }
    return (
        <>
            <section className="ui grid container">
                <div className="shopping-cart-container">
                    {
                        addCart.map((ad, i) => {
                            return (
                                
                                <div key={ad.id} className="shopping-cart-section">
                                    <div className="cart-img-section">
                                        <img src={ad.image} className="cartimg" alt="" />
                                    </div>
                                    <div className="cart-title-content">
                                        <h4>{ad.title} </h4>
                                        <p>Size: Large</p>
                                        <p>color: Black</p>
                                        <p>${ad.price}</p>
                                        
                                    </div>

                                    <div className="quantity-cart-detail-page">
                                        <button type="button" onClick={handleDecrement} className="input-grp-txt"><img src={minus} className="minuscount-img-cart" /></button>
                                        <div className="count-box-cart">
                                            {ad.qty}
                                        </div>
                                        <button type="button" onClick={handleIncrement} className="input-grp-txt"><img src={plus} className="pluscount-img-cart" /></button>
                                    </div>

                                    <div className="cart-quantity-handdle">
                                        <div className="handdle-section">
                                        <Link to={`/product/${ad.id}`} ><img src={edit} className="edit-img" /></Link>
                                            <div className="cart-handle-name">
                                                <p>Edit Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <img src={remove} className="remove-img"  />
                                            <div className="cart-handle-name">
                                                <p>Remove Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <img src={heart1} className="save-img" />
                                            <div className="cart-handle-name">
                                                <p>Save for Later</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pricing">
                                        <PricingSummary />
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </section>
            <CartAccordian />
            <RecentlyViewed />
        </>
    )

}

export default ShoppingCart;