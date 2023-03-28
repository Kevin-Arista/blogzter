import React from "react";
import './nav-component.css';
import {Link} from "react-router-dom"

function NavComponent(props){
    return(
        <div className="NavComponent">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogz</Link>
                </li>
                <li>
                    <Link to="/forms">Form</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavComponent;