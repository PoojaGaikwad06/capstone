import React from "react";
import "./SideBar.scss";

const Sidebar = () => {
    return (
        <section className="main-sidebar">
            <div className="sidebar-heading">
                <p>Filters</p>
                <hr className="divider"></hr>
            </div>
            <div className="size">
                <p>Size</p>
                <label><input type="checkbox" className="check-box" />X-Small</label>
                <label><input type="checkbox" className="check-box" />Small</label>
                <label><input type="checkbox" className="check-box" />Medium</label>
                <label><input type="checkbox" className="check-box" />Large</label>
                <label><input type="checkbox" className="check-box" />X-Large</label>
                <p>see More</p>
            </div>
            <hr className="divider"></hr>
            <div className="style">
                <p>Style</p>
                <label><input type="checkbox" className="check-box" />Outdoor</label>
                <label><input type="checkbox" className="check-box" />Casual</label>
                <label><input type="checkbox" className="check-box" />Athleisure</label>
                <label><input type="checkbox" className="check-box" />Running</label>
                <label><input type="checkbox" className="check-box" />Active</label>
            </div>
            <hr className="divider"></hr>
            <div className="color">
                <p>Color</p>
                <div className="flex-container">
                    <div className="black">1</div>
                    <div className="white"></div>
                    <div className="lime"></div>
                    <div className="yellow"></div>
                    <div className="blue">1</div>
                    <div className="red"></div>
                    <div className="purple"></div>
                    <div className="pink"></div>
                    <div className="orange">1</div>
                    <div className="gradient">1</div>
                </div>
                <hr className="divider"></hr>
                <div className="brand">
                    <p>Brand</p>
                    <label><input type="checkbox" className="check-box" />Calvin Klein</label>
                    <label><input type="checkbox" className="check-box" />Dolce & Gabbana</label>
                    <label><input type="checkbox" className="check-box" />Miu Miu</label>
                    <label><input type="checkbox" className="check-box" />Prada</label>
                    <label><input type="checkbox" className="check-box" />Rag & Bone</label>
                    <label><input type="checkbox" className="check-box" />Gucci</label>
                    <label><input type="checkbox" className="check-box" />Chanel</label>
                    <label><input type="checkbox" className="check-box" />Salvatore Ferragamo</label>
                    <label><input type="checkbox" className="check-box" />Marni</label>
                    <label><input type="checkbox" className="check-box" />Dior</label>
                </div>
                <hr className="divider"></hr>

            </div>
        </section>
    );
}

export default Sidebar;