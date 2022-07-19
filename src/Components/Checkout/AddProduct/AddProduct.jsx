import React, { useState } from "react";
import './AddProduct.scss';
import product2 from '../../../Assets/product2.jpg';
import product3 from '../../../Assets/product3.jpg';
import { useSelector } from "react-redux/es/exports";


const AddProduct = () => {
    const addCart = useSelector((state) => state.addCart);
    console.log(addCart);
    const renderList = addCart.map((product) => {
        const { id, title, image, price, category } = product;
        return (

            <section className="add-product-section" key={id} id={id}>
                <div class="add-product-block">
                    <h1>items in your order</h1>
                </div>

                <div key={id} className="add-product-content">
                <div className="content-details">
                    <div className="pro-1">
                        <img src={image} className="product-img-1" />
                    </div>
                    <div>
                        <p className="pro-des">
                            <b>Title:-&nbsp;&nbsp;</b>{title}<br />
                            <b>Price:-&nbsp;&nbsp;</b>${price}<br />
                            <b>Category:-&nbsp;&nbsp;</b>{category}

                        </p>
                    </div>
                    </div>

                </div>

            </section>

        );
    }
    )
    return <div className="add-product-content">{renderList}</div>;

};

export default AddProduct;