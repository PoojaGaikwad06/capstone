import React from "react";
import './AddProduct.scss';
import product2 from '../../../Assets/product2.jpg';
import product3 from '../../../Assets/product3.jpg';


const AddProduct = () => {
    return (
    <section className="add-product-section">
        <div class="add-product-block">
            <h1>2 items in your order</h1>
        </div>
        <div className="add-product-content">
            <div className="pro-1">
            <img src={product2} className="product1-image" alt="product2" />
            </div>
            <div>
            <p className="pro-des">
            Mens Cotton Jacket<br />Size: Medium<br /> Color: Storm<br /> Quantity: 2
            </p>
            </div>
            <div className="pro-1">
            <img src={product3} className="product2-image" alt="editicon" />
            </div>
            <div>
            <p className="pro-des">
            White Gold Princess<br />Size: Medium<br /> Color: Storm<br /> Quantity: 2
            </p>
            </div>
            
        </div>
    </section>
    )
}

export default AddProduct;