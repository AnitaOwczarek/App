import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css"

const List = [
    { name: "start", path:"/start", exact:true},
    { name: "produkty", path:"/products"},
    { name: "kontakt", path:"/contact"},
    { name: "panel admin", path:"/admin"},
]

function Navigation ()  {
    const menu = List.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} >{item.name}</NavLink>
        </li>
    ))
    return(
    <nav className="main">
        <ul>
            {menu}
        </ul>
    </nav>
    );
}

export default Navigation