
import React from "react";
import "./Footer.scss";
import logo from "../../../Assets/finallogo.png"
import facebook from "../../../Assets/facebook.png"
import instagram from "../../../Assets/instagram.png"
import twitter from "../../../Assets/twitter.png"



class Footer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            //footer start here
            <footer>
                <div className="foo-container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Account</h4>
                            <ul>
                                <li><a href="#">Sign In</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Order Status</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>About Us</h4>
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Help</h4>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us!</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <div className="icons">
                                <div><img src={instagram} alt="instagram" className="insta" /></div>
                                <div><img src={facebook} alt="facebook" className="fcb" /></div>
                                <div><img src={twitter} alt="twitter" className="twt" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btm-footer">
                    <img src={logo} alt="taste of fruit" className="logo-btm" />
                    <p className="content">© Company Name Address Ave, City Name, State ZIP</p>
                    <ul className="btmtxt">
                        <li className="list"><a href="#">Terms of Use</a></li>
                        <li className="list"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </footer>
            //footer End here
        );
    }
}

export default Footer;