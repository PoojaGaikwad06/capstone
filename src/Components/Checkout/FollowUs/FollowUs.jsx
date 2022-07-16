import React from "react";
import './FollowUs.scss';
import fb from '../../../Assets/fb.png';
import igram from '../../../Assets/igram.png';
import twt from '../../../Assets/twt.png';



const FollowUs = () => {
    return (
        <section className="follow-us-section">
            <h1 className="follow-us-heading">Give us a follow to SAVE 20% on your next order.</h1>
            <div className="s-icon-sec">
            <img src={fb} alt="fb-img" className="facebook-img" />
            <img src={igram} alt="igram-img" className="igram-img" />
            <img src={twt} alt="twt-img" className="twt-img" />
            </div>
        </section>
    )
}
export default FollowUs;