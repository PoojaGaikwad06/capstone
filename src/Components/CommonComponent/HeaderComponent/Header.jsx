import React, { useState } from "react";
import "./Header.scss";
import VeniaLogo from "../../../Assets/VeniaLogo.png"
import cartbag from "../../../Assets/cartbag.png";
import menubtn from "../../../Assets/menubtn.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../../Redux/store";
import close from '../../../Assets/close.png';


class Header extends React.Component {
    // const [show, setShow] = useState(false);

    state = { flag: false }
    
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };

        store.subscribe(() => {

            this.setState({
                items: store.getState().addCart
            });
        });
    }

    render() {

        return (
            <>
                <header>
                    <Link to={`/capstone`}>
                        <div className="logo-imgs">
                            <img src={VeniaLogo} alt="Venia" className="Venia-Logo" />
                        </div>
                    </Link>
                    <nav className="Navbar-Desktop">
                        <ul className="Nav__Link">
                            <link to={`/home`}></link>
                            <li >
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")}
                                    to={'/capstone'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")}
                                    to={'/product'} state={{ cond: 'All' }}>
                                    All
                                </NavLink>
                            </li>
                            <li>
                                <Link to='/product' state={{ cond: "men's clothing" }}>
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link to='/product' state={{ cond: "women's clothing" }}>
                                    Women
                                </Link>
                            </li>
                            <li>
                                <Link to='/product' state={{ cond: "jewelery" }}>
                                    Jewellery
                                </Link>
                            </li>
                            <li>
                                <Link to='/product' state={{ cond: "Electronics" }}>
                                    Electronics
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="Cart-Bag">
                        <div><Link to='/cart'><img src={cartbag} alt="cart-bag" className="Cart-Bag-Icon" /></Link> <span className="cart-count">{this.state.items.length}</span></div>

                    </div>
                </header>

                <div className="Mobile-Header-Section">
                    <div className="Clickme" onClick={() => {
                        this.setState({ flag: !this.state.flag })

                    }}><img src={menubtn} alt="menu-btn" className="Menu-Btn-Mobile" />
                    </div>
                    {this.state.flag  ?<nav className="Navbar-Mobile" id="menu-div">
                        <div className="shop-catagory">
                            <div className="head-shop-text">
                                <p><b>Shop Categories</b></p>
                            </div>
                            <div className="head-close-icon" onClick={() => {
                        this.setState({ flag: !this.state.flag })

                    }}><img src={close} alt="close-btn" className="close-Btn-Mobile" />
                        </div>
                        </div>
                            <ul className="Nav__Link">
                                <li>
                                    <NavLink className={({ isActive }) => (isActive ? "active" : "")}
                                        to={'/capstone'}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/product'} state={{ cond: 'All' }}>
                                        All
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to='/product' state={{ cond: "men's clothing" }}>
                                        Men
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/product' state={{ cond: "women's clothing" }}>
                                        Women
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/product' state={{ cond: "jewelery" }}>
                                        Jewellery
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/product' state={{ cond: "Electronics" }}>
                                        Electronics
                                    </Link>
                                </li>
                            </ul>
                    </nav> : ""}
                    <div className="Mobile-Logo">
                        <Link to={`/capstone`}>
                            <img src={VeniaLogo} alt="venia-logo" className="Venia-Logo-Mobile" />
                        </Link>
                    </div>
                    <div className="Mob-Icon-Cart">
                        <div><Link to='/cart'><img src={cartbag} alt="cart-bag" className="Cart-Bag-Icon" /></Link> <span className="cart-count">{this.state.items.length}</span></div>
                    </div>
                </div>
            </>
        );

    }
}

export default Header;