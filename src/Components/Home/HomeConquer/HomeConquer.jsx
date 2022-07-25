import React from "react";
import './HomeConquer.scss';
import conqure from '../../../Assets/conqure.png';
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
                <NavLink to='/product' state={{cond:"Electronics"}}>
                <button className="devices-btn">SHOP DEVICES</button>
                </NavLink>
            </div>
            <div className="home-conqure-loc-icon">
            <svg className="conquer-map-section" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 20 24">
                <g id="map-pin" transform="translate(-2)">
                    <path id="Path_38027" dataname="Path 38027" d="M21,10c0,7-9,13-9,13S3,17,3,10a9,9,0,1,1,18,0Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                    <circle id="Ellipse_132" dataname="Ellipse 132" cx="3" cy="3" r="3" transform="translate(9 7)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                </g>
            </svg>
            <div className="loc-divider">

            </div>
            </div>
        </section>
    )
}

export default HomeConquer;