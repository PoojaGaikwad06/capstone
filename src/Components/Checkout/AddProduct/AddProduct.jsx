import React from "react";
import './AddProduct.scss';
import edit from '../../../Assets/edit.png'


const AddProduct = () => {
    return (
    <section className="add-product-section">
        <div class="add-product-block">
            <h1>3 items in your order</h1>
            <img src={edit} className="edit-image" alt="editicon" />
        </div>
        <div className="add-product-content">
            <p className="p">
            <img src={edit} className="edit-image" alt="editicon" />
            </p>
            <br />
            <p className="q">
                Qadim Farhan <br />1098 Wapello Street<br /> Altadena, California 91001<br /> United States
            </p>
            
        </div>
    </section>
    )
}

export default AddProduct;