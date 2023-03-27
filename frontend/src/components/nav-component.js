import React from "react";
import './nav-component.css';
import { BrowserRouter, Route, Link} from "react-router-dom"

function NavComponent(props){
    return(
        <div className="NavComponent">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/forms">Forms</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavComponent;