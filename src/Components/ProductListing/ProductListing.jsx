import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "../ProductComponent/ProductComponent";
import axios from "axios";
import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from '../../Redux/actions/ProductAction';
import Banner from "../BannerComponent/Banner";
import Sort from "../SortCatageory/Sort";
import Sidebar from "../SideBar/Sidebar";
import "./ProductListing.scss";
import spinner from "../../Assets/spinner.gif";

const ProductListing = () => {

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const respones = await axios
            .get("https://fakestoreapi.com/products") // fetch all the listing data
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setProducts(respones.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);



    return (
        <>

            <section className="ui grid container">
               <Banner />
                 <Sort /> 
                {products.length != 0 ? <div className="main-pro">
                    <div className="one">
                        <Sidebar /> 
                    </div>
                    <div className="two">
                      <ProductComponent /> 
                    </div>
                </div> : <center><span><img src={spinner} alt="loader" className="spinner-img" /></span></center>
                }
            </section>

        </>

    );
};

export default ProductListing;