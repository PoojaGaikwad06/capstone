import React, { useState } from "react";
import "./Sort.scss";
import sliders from "../../Assets/sliders.png"
import arrowdown from "../../Assets/arrowdown.png"
import { Link } from "react-router-dom"; import { orderBy } from "lodash";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Sort = () => {
    // const [product, setProduct] = useState([]);
    // const { allProduct } = useSelector((state) => state.cart_reducer);


    // const handleSort = (e) => {
    //     const name = e.target.value;
    //     if (name === "price") {
    //       let sortArray = orderBy(allProduct, [name], ["asc"]);
    //       setProduct(sortArray);
    //     } else {
    //       let sortArray = orderBy(allProduct, [(c) => c.rating.rate], ["dsc"]);
    //       setProduct(sortArray);
    //     }
    //   };

    return (
        <>
            <section className="sort-container">
                <div className="sort-cat">
                    <p>
                        <Link to={'/capstone'} ><span style={{ color: "#E26A2C" }}>Dashboard</span> </Link>/ Product List
                    </p>
                </div>
                <div className="sort-Result">
                    <p>
                        20 Results
                    </p>
                </div>
                <div className="sort-box">
                    <select className="s-dropdown">
                        <option value="Sort by Latest">Sort by Price</option>
                        <option value="Sort by Latest">Sort by Rating</option>

                    </select>
                </div>

            </section>
            <div className="filtter-result-mobile">
                <div className="mob-1">
                <div className="fillter-img">
                    <img src={sliders} alt="slider-bar" className="filter-prod" />
                </div>
                <div className="filter-text">
                    <p>Filter Results</p>
                </div>
                </div>
               <div className="mob-2">
               <div className="fillter-img">
                    <img src={arrowdown} alt="up-down-arrow" className="sort-prod" />
                </div>
                <div className="filter-text">
                    <p>Filter Results</p>
                </div>
               </div>
               
            </div>
        </>
    );
}


export default Sort;