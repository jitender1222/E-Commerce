
import { NavLink } from "react-router-dom";

const SingleProductPage=(currEle)=>{
    const {id,name,image,price,category}=currEle;
    return (
        <>
        <NavLink to={`/singleproduct/${id}`} className="product-link">
            <div className="card">
                <figure>
                    <img src={image} alt={name} className="card-img"></img>
                </figure>

            <div className="card-data">
                <div className="card-data-flex">
                <h3>{name}</h3>
                <p className="card-price">{price}</p>
                </div>
            </div>
            </div>
        </NavLink>
        </>
    )
}

export default SingleProductPage;