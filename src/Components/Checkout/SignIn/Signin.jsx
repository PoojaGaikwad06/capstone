import React from "react";
import "./Signin.scss";

const Signin =()=>{
    return(
        <main className="main-section-signin">
            <section className="singin-info-section">
                <p className="info-txt">Sign in for Express Checkout</p>
            </section>
            <section className="singin-btn-section">
                <button className="sign-in-btn">Sign In</button>
            </section>
        </main>
    )
}

export default Signin;