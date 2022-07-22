import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectedProduct, removeselectedProduct, addTOCart } from "../../Redux/actions/ProductAction";
import plus from "../../Assets/plus.png";
import minus from "../../Assets/minus.png";
import heart from "../../Assets/heart.png";
import share from "../../Assets/share.png";
import { useNavigate } from "react-router-dom";
import spinner from "../../Assets/spinner.gif";


const ProductDetails = () => {
    let navigate = useNavigate();
    const product = useSelector((state) => state.product);
    const { id, title, image, price, category, description } = product;

    const navigateToCart = () => {
        navigate("/cart") //navigate to cart page
        let p = { ...product };
        p.qty = quantity;
        dispatch(addTOCart(p))
    }
    const { productID } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products/' + productID) //fetch single product data from api
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(selectedProduct(response.data))
    };

    useEffect(() => {
        if (productID && productID !== "") fetchProductDetails();
        return () => {
            dispatch(removeselectedProduct()) //remove selected product
        }
    }, [productID]);


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

    return (
        <section className="ui grid container">
            {
                image ? <div className="product-two-col">
                    <div className="thumbnail-img">
                        <div className="img1"><img src={image} alt={title} className="small-img" id="ti-1" /></div>
                        <div className="img1"><img src={image} alt={title} className="small-img" /></div>
                        <div className="img1"><img src={image} alt={title} className="small-img" /></div>
                        <div className="img1"><img src={image} alt={title} className="small-img" /></div>
                        <div className="img1"><img src={image} alt={title} className="small-img" /></div>
                    </div>
                    <div className="pdetail-img">
                        <img src={image} alt={title} className="detail-img" />
                    </div>
                    <div className="pdetail-info">
                        <div className="breadcurb">
                            <p className="breadcurb-info">Clothing / Women’s / Outerwear</p>
                        </div>
                        <h1>{title}</h1>
                        <h2>${price}</h2>

                        <p>{description}</p>
                        <hr className="divider"></hr>
                        <p className="pd-heading">Quantity</p>
                        <div className="quantity">
                            <button type="button" onClick={handleDecrement} className="input-grp-txt"><img src={minus} alt={title} className="minuscount-img" /></button>
                            <div className="count-box">
                                {quantity}
                            </div>
                            <button type="button" onClick={handleIncrement} className="input-grp-txt"><img src={plus} alt={title} className="pluscount-img" /></button>
                        </div>


                        <button onClick={navigateToCart} className="add-cart">ADD TO CART</button>
                        <div className="share-product">
                            <div className="wishlist-1">
                                <img src={heart} alt="like" className="whishlist-icon" />
                                <p>Save</p>
                            </div>
                            <div className="wishlist-2">
                                <img src={share} alt="like" className="share-icon" />
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <div className="product-about-heding"><b>{title}</b></div><br/>
                        <div className="product-about-content">
                            <p className="product-about-sub-heading">Description</p>
                            {description}
                        </div>
                        <hr className="desc-div"></hr>
                    </div>

                </div> : <center><span><img src={spinner} className="spinner-img" /></span></center>

            }
        </section>
    )
};

export default ProductDetails;