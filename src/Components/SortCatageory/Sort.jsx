import React from "react";
import "./Sort.scss";
import sliders from "../../Assets/sliders.png"
import arrowdown from "../../Assets/arrowdown.png"



const Sort = () => {
    return (
        <>
            <section className="sort-container">
                <div className="sort-cat">
                    <p>
                        Clothing / Women’s / Outerwear
                    </p>
                </div>
                <div className="sort-Result">
                    <p>
                        20 Results
                    </p>
                </div>
                <div className="sort-box">
                    <select className="s-dropdown">
                        <option value="Sort by Latest">Sort by Latest</option>
                    </select>
                </div>

            </section>
            <div className="filtter-result-mobile">
                <div className="fillter-img">
                    <img src={sliders} alt="slider-bar" className="filter-prod" />
                </div>
                <div className="filter-text">
                    <p>Filter Results</p>
                </div>
                <div className="fillter-img">
                    <img src={arrowdown} alt="up-down-arrow" className="sort-prod" />
                </div>
                <div className="filter-text">
                    <p>Filter Results</p>
                </div>
            </div>
            <div className="sort-mobile-text">
                <center><h5><b>38 Results</b></h5></center>
            </div>
        </>
    );
}

export default Sort;