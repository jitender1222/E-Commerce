import { NavLink } from "react-router-dom"

import {GiShoppingCart} from "react-icons/gi";
import {CgClose, CgMenu} from "react-icons/cg";
import { useState } from "react";

const Navbar=()=> {
    const [value,setValues]=useState();
    return (
        <div className="">
            <ul className="list active">
                <NavLink to="/" className="inner-list"><li >Home</li></NavLink>
                <NavLink to="/about" className="inner-list"><li >About</li></NavLink>
                <NavLink to="/product" className="inner-list"><li >Product</li></NavLink>
                <NavLink to="/contact" className="inner-list"><li >Contact</li></NavLink>
                <NavLink to="/login" className="inner-list"><li >LOGIN</li></NavLink>
                <NavLink to="/cart" className="inner-list cart">
                    <span className="cart-upper">10</span>
                    <li>
                <GiShoppingCart />
                    </li></NavLink>
            </ul>
            <CgMenu className="side-btn menu-open" />
            <CgClose className="side-btn menu-close"/>
        </div>
    )
}

export default Navbar;