import React from "react";
import product2 from "../../Assets/product2.jpg";
import product3 from "../../Assets/product3.jpg";
import product44 from "../../Assets/product44.jpg";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";




const RecentlyViewed = () => {
    return (
        <>
            <section className="ui grid container">
                <div className="heading">
                    <h1 className="recent-view-heading">Recently View</h1>
                </div>
                <center>

                    <div className="recent-view-section">
                        <div className="arrow-left">
                            <img src={left} alt="" className="left-img" />
                        </div>
                        <div className="abc">
                            <div className="recent-view-section-img">
                                <img src={product44} alt="" className="rec-img" />
                                <h4><b>Mens Casual Premium Slim Fit</b></h4><br />
                                <p>$244</p>
                            </div>

                        </div>
                        <div className="abc">
                            <div className="recent-view-section-img">
                                <img src={product2} alt="" className="rec-img" />
                                <h4><b>Mens Cotton Jacket</b></h4><br />
                                <p>$55.99</p>
                            </div>

                        </div>
                        <div className="abc">
                            <div className="recent-view-section-img">
                                <img src={product3} alt="" className="rec-img" />
                                <h4><b>White Gold Plated Princess</b></h4><br />
                                <p>$9.99</p>
                            </div>

                        </div>
                        <div className="abc">
                            <div className="recent-view-section-img">
                                <img src={product44} alt="" className="rec-img" />
                                <h4><b>Mens Casual Premium Slim Fit</b></h4><br />
                                <p>$114</p>
                            </div>
                        </div>
                        <div className="arrow-right">
                            <img src={right} alt="" className="left-img" />
                        </div>
                    </div>
                </center>

            </section>
        </>
    )
}

export default RecentlyViewed;