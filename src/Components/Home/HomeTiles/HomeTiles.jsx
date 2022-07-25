import React from "react";
import './HomeTiles.scss' ;
import women from '../../../Assets/women.png';
import men from '../../../Assets/men.png';
import jwellary from '../../../Assets/jwellary.png';
import electronic from '../../../Assets/electronic.png';
import { Link } from "react-router-dom";



const HomeTiles = () => {
    return (
        <section className="home-tile-section">
            <div className="tile-women">
                <div className="tile-women-img">
                <Link to='/product' state={{cond:"women's clothing"}}>
                    <img src={women} alt="women-tile" />
                </Link>
                </div>
                <div className="tile-women-content">
                    <h2>Shop Women</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="divider-tiles"></div>
            </div>
            <div className="tile-men">
                <div className="tile-men-img">
                <Link to='/product' state={{cond:"men's clothing"}}>
                    <img src={men} alt="men-tile" />
                </Link>

                </div>
                <div className="tile-men-content">
                    <h2>Shop Men</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="divider-tiles"></div>
            </div>
            <div className="tile-Jewellery">
                <div className="tile-Jewellery-img">
                <Link to='/product' state={{cond:"jewelery"}}>
                    <img src={jwellary} alt="men-tile" />
                </Link>
                </div>
                <div className="tile-Jewellery-content">
                    <h2>Shop Jewellery</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="divider-tiles"></div>
            </div>
            <div className="tile-electronics">
                <div className="tile-electronics-img">
                <Link to='/product' state={{cond:"Electronics"}}>
                    <img src={electronic} alt="Electronics-tile" />
                </Link>
                </div>
                <div className="tile-electronics-content">
                    <h2>Shop Electronics</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="divider-tiles"></div>
            </div>
        </section>
    )
}

export default HomeTiles;