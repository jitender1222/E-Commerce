import { useContext } from "react";
import { AppContext } from "../Context/ProductContext";
import Product from "../Product";
import HomePage from "./HomePage";


const AboutPage=()=>{
    const name=useContext(AppContext);
    return (
        <>
        <HomePage />
        <Product />
        </>
    )
}

export default AboutPage;