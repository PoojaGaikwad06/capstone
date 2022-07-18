import React from "react";
import './HomeConquer.scss';
import conqure from '../../../Assets/conqure.png';
import mappin from '../../../Assets/mappin.png';
import { NavLink } from "react-router-dom";


const HomeConquer=()=>{
    return(
        <section className="home-conqure-section">
            <div className="home-conqure-img">
            <img src={conqure} alt="Home-Banner"></img>
            </div>
            <div className="home-conqure-content">
                <h1>Conquer your next adventure</h1>
                <p>Lorem Ipsum Dolor Tempor</p>
                <NavLink to={'/product'}>
                <button className="devices-btn">SHOP DEVICES</button>
                </NavLink>
            </div>
            <div className="home-conqure-loc-icon">
            <img src={mappin} alt="Home-Banner"></img>
            <div className="loc-divider">

            </div>
            </div>
        </section>
    )
}

export default HomeConquer;