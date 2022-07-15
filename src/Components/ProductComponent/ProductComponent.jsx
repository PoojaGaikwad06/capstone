import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./ProductComponent.scss";
import heart from "../../Assets/heart.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductComponent = () => {
        const likeFune = () => {
                setLiked(!liked)
        }
        const [liked, setLiked] = useState(false);
        const products = useSelector((state) => state.allProducts.products);
        const renderList = products.map((product) => {
                const { id, title, image, price, category } = product;
                return (

                        <section className="grid-item container" key={id} id={id}>
                                <div className="image">
                                        <Link style={{ textDecoration: 'none', color: "#1B252C" }} to={`/product/${id}`}>
                                                <img src={image} alt={title} className="pro-img" />
                                        </Link>
                                </div>

                                <div className="content">
                                        <div className="header">
                                                <h4>{title}</h4>
                                                </div>
                                        <div className="meta price">${price}</div>
                                        <div className="meta">{category}</div>
                                        <div>
                                                <svg onClick={() => likeFune()} xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
                                                        <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.549 -1.998)" fill={liked ? "#333" : "none"} stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                        </div>
                                </div>
                        </section>
                );
        }
        )
        return <div className="grid-container">{renderList}</div>;

};

export default ProductComponent;