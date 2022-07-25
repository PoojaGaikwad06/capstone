import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import CartAccordian from "../ShoppingCart/CartAccordian";
import RecentlyViewed from "./RecentlyViewed";
import PricingSummary from "./PricingSummary";
import "./ShoppingCart.scss";
import edit from "../../Assets/edit.png";
import heart1 from "../../Assets/heart1.png";
import remove from "../../Assets/remove.png";
import plus from "../../Assets/plus.png";
import minus from "../../Assets/minus.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ShoppingCart = () => {

    const [likeArray, updateLikeArray] = useState([]);

    const onClick = (id) => {
        let likes = [];
        if (likeArray.includes(id)) {
            likes = likeArray.filter((itemId) => itemId !== id);
        } else {
            likes = [...likeArray, id];
        }

        updateLikeArray(likes);
    };
    const navigate = useNavigate();
    let addCart = useSelector((state) => state.addCart);
    //Quantity IncDec start
    const [quantity, setQuantity] = useState(new Array(addCart.length).fill(1));
    const handleDecrement = (i) => {
        console.log(i);
        if (quantity[i] > 1) {
            let q = quantity;
            q[i] = q[i] - 1;
            setQuantity([...q]); // decrement quantity
            //console.log(quantity);

        }
    }

    const handleIncrement = (i) => {
        if (quantity[i] < 10) {
            let q = quantity;
            q[i] = q[i] + 1;
            setQuantity([...q]); // increment quantity
            //console.log(quantity);
        }
    }
    //Quantity IncDec End

    const removeItem = (i) => {
        console.log("Index: " + i);
        addCart.splice(i, 1);
        let q = quantity;
        q.splice(i, 1);
        setQuantity([...q]);
        navigate("/cart");
    }
    return (
        <>
            <section className="ui grid container">
                <div className="shopping-cart-container">
                    {addCart.length > 0 ?
                        <div className="">
                            {addCart.map((ad, i) => {
                                return (<div key={i} className="shopping-cart-section">
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
                                        <button type="button" onClick={() => handleDecrement(i)} className="input-grp-txt"><img src={minus} className="minuscount-img-cart" /></button>
                                        <div className="count-box-cart">
                                            {quantity[i]}
                                        </div>
                                        <button type="button" onClick={() => handleIncrement(i)} className="input-grp-txt"><img src={plus} className="pluscount-img-cart" /></button>
                                    </div>

                                    <div className="cart-quantity-handdle">
                                        <div className="handdle-section">
                                            <Link to={`/product/${ad.id}`} >
                                                <img src={edit} className="edit-img" />
                                            </Link>
                                            <div className="cart-handle-name">
                                                <p>Edit Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <button type="button" onClick={() => removeItem(i)} className="input-grp-txt"><img src={remove} className="remove-img" /></button>
                                            <div className="cart-handle-name">
                                                <p>Remove Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <svg onClick={() => onClick(ad.id)} name={ad.id} className="like" xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
                                                <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                                                    transform="translate(-0.549 -1.998)" fill={likeArray?.includes(ad.id) ? "black" : "none"}
                                                    stroke={likeArray?.includes(ad.id) ? "black" : "#e26a2c "} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            </svg>                                            <div className="cart-handle-name">
                                                <p>Save for Later</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                            })}


                        </div> :
                        <h2 className="empty-cart">Your Cart is Empty</h2>
                    }
                    <div className="pricing">
                        <PricingSummary />
                    </div>

                </div>
            </section>
            <CartAccordian />
            <RecentlyViewed />
        </>
    )

}

export default ShoppingCart;