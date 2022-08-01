import React from "react";
import { NavLink } from "react-router-dom";
import banner from '../../../Assets/banner.png';
import './HomeBanner.scss';

const HomeBanner = () => {
    return (
        <section className="home-banner-section">
            <div className="home-banner-img">
                <img src={banner} alt="Home-Banner"></img>
            </div>
            <div className="home-banner-content">
                <h1>Shop the new<br />Signature Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                <NavLink to={'/product'} state={{ cond: 'All' }}>
                    <button className="home-banner-btn">SHOP NOW</button>
                </NavLink>
            </div>
        </section>
    )
}

export default HomeBanner;