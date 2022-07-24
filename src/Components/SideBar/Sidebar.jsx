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
                <p>Categories</p>
                <label><input type="checkbox" className="check-box" />Jewelery</label>
                <label><input type="checkbox" className="check-box" />Electronics</label>
                <label><input type="checkbox" className="check-box" />Mens's Clothing</label>
                <label><input type="checkbox" className="check-box" />Women's Clothing</label>
            </div>
            <hr className="divider"></hr>
        </section>
        
    );
}

export default Sidebar;