import React, { Fragment } from "react";
import "./Header.scss";
import VeniaLogo from "../../../Assets/VeniaLogo.png"
import cartbag from "../../../Assets/cartbag.png";
import menubtn from "../../../Assets/menubtn.png";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
    state = { flag: false }
    render() {

        return (
            <>
                <header>
                    <Link to={`/capstone`}>
                        <img src={VeniaLogo} alt="Venia" className="Venia-Logo" />
                    </Link>
                    <nav className="Navbar-Desktop">
                        <ul className="Nav__Link">
                            <link to={`/home`}></link>
                            <li>
                                <NavLink to={'/capstone'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/product'}>
                                    All
                                </NavLink>
                            </li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Jewellery</li>
                            <li>Electronics</li>
                        </ul>
                    </nav>
                    <div className="Cart-Bag">
                        <div><img src={cartbag} alt="cart-bag" className="Cart-Bag-Icon" /></div>
                    </div>
                </header>

                <div className="Mobile-Header-Section">
                    <div className="Clickme" onClick={() => {
                        this.setState({ flag: !this.state.flag })

                    }}><img src={menubtn} alt="menu-btn" className="Menu-Btn-Mobile" />
                    </div>
                    {this.state.flag ? <nav className="Navbar-Mobile" id="menu-div">
                        <ul className="Nav__Link">
                            {/* <li><a href="/home">Home</a></li> */}
                            <li>
                                <NavLink to={'/capstone'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/product'}>
                                    All
                                </NavLink>
                            </li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Jewellery</li>
                            <li>Electronics</li>
                        </ul>
                    </nav> : ""}
                    <div className="Mobile-Logo">
                        <Link to={`/capstone`}>
                            <img src={VeniaLogo} alt="venia-logo" className="Venia-Logo-Mobile" />
                        </Link>
                    </div>
                    <div className="Mob-Icon-Cart">
                        <div><img src={cartbag} alt="cart-bag" className="Cart-Bag" /></div>
                    </div>
                </div>
            </>
        );

    }
}

export default Header;