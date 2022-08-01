import React, { Component } from "react";
import './Banner.scss';
import productbanner from '../../Assets/productbanner.jpg';

class Banner extends React.Component {
    render() {
        return (
            <section className="wrapper">
                <div className="banner-section">
                    <div className="banner-heading">
                        <h1>All Products</h1>
                        <hr class="underline"></hr>
                    </div>
                    <div className="banner-image">
                        <img src={productbanner} className="Banner-image" alt="Banner" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;