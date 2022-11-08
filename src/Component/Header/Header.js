
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css"

import {HiShoppingBag } from "react-icons/hi"

const Header=()=>{
    return (
        <div className="Container">
            <NavLink to="/">
            <HiShoppingBag className="header-img" />
            </NavLink>
            <Navbar />
        </div>
    )

}

export default Header;