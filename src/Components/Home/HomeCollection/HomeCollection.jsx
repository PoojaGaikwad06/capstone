import React from "react";
import './HomeCollection.scss';
import collection from '../../../Assets/collection.png';
import { NavLink } from "react-router-dom";


const HomeCollection = () => {
    return (
        <section className="home-collection-section">
            <div className="home-collection-img">
                <img src={collection} alt="Home-Banner"></img>
            </div>
            <div className="home-collection-content">
                <h1>Take off in the new Signature Legging</h1>
                <h6>Lorem Ipsum Dolor Tempor</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna lorem ipsum dolor sit amet.</p>
                <div className="home-collection-btn">
                    <NavLink to={'/product'} state={{ cond: 'All' }}>
                        <button className="btn-shop">SHOP NOW</button>
                    </NavLink>
                    <NavLink to={'/product'} state={{ cond: 'All' }}>
                        <button className="btn-collection">SHOP COLLECTION</button>
                    </NavLink>
                    <div className="collection-divider">

                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomeCollection;