import { useProductContext } from "./Context/ProductContext";

import "../App.css"

import SingleProductPage from "./Page/SingleProductPage";

const Product=()=>{

    const {isLoading,featureProducts} = useProductContext();
    console.log(featureProducts);
    
    if(isLoading){
        return <> Loading.....</>
    }
    return (
        <>
        <div className="app" >
            <div className="upper-text">
            <p className="inner-text">Check Now</p>
            <h2>Our Feature Services</h2>
            </div>
            {
            featureProducts.map((currEle)=>{
               return  <SingleProductPage value={currEle.id} {...currEle} />   
            })
        }
        </div>
        </>
    )
}

export default Product;