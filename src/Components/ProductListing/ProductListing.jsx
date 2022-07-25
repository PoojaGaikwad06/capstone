import React, { useRef } from "react";
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
import {useLocation} from 'react-router-dom'
import { useState } from "react";

const ProductListing = () => {    
    const location = useLocation();
    const [filterdata,setFilterData]=useState([]);
    console.log("condition: "+location.state.cond);
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

    const getFilterChanged=(fdata)=>{
        
        console.log(fdata);
        const arr=["jewelery","electronics","men's clothing","women's clothing"];
        let arr2=[];
        for(var i=0;i<fdata.length;i++){
            if(fdata[i]){
                arr2.push(arr[i]);
            }
        }
        setFilterData(arr2);
        console.log(arr2);

    };
    

    return (
        <>

            <section className="ui grid container">
               <Banner />
                 <Sort /> 
                {products.length != 0 ? <div className="main-pro">
                    <div className="one">
                        <Sidebar onFilterChanged={getFilterChanged}  /> 
                    </div>
                    <div className="two">
                      <ProductComponent cond={location.state.cond} cfilter={filterdata} /> 
                    </div>
                </div> : <center><span><img src={spinner} alt="loader" className="spinner-img" /></span></center>
                }
            </section>

        </>

    );
};

export default ProductListing;