import React from "react";
import { useState } from "react";
import "./SideBar.scss";

const Sidebar = (props)=>{
    
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );
    
    const handleChange=(position)=>{
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item);

        setCheckedState(updatedCheckedState);
        console.log(checkedState);
        props.onFilterChanged(updatedCheckedState);

    };
    return (
        <section className="main-sidebar">
            <div className="sidebar-heading">
                <p>Filters</p>
                <hr className="divider"></hr>
            </div>
            <div className="size">
                <p>Categories</p>
                <label><input type="checkbox" checked={checkedState[0]} className="check-box" onChange={event=>handleChange(0)} />Jewelery</label>
                <label><input type="checkbox" checked={checkedState[1]} className="check-box" onChange={event=>handleChange(1)}/>Electronics</label>
                <label><input type="checkbox" checked={checkedState[2]} className="check-box" onChange={event=>handleChange(2)}/>Men's Clothing</label>
                <label><input type="checkbox" checked={checkedState[3]} className="check-box" onChange={event=>handleChange(3)}/>Women's Clothing</label>
            </div>
            <hr className="divider"></hr>
        </section>
        
    );
}

export default Sidebar;