import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();
    return (
        <nav>
            <Link to="/" style={{borderBottom: `${location.pathname === "/" ? "1px solid rgb(62, 23, 134)" : ""}`}}>Home</Link>
            <Link to="/todo-list" style={{borderBottom: `${location.pathname === "/todo-list" ? "1px solid rgb(62, 23, 134)" : ""}`}}>Todo list</Link>
        </nav>
    )
}