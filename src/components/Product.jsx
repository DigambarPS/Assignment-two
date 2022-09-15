import React from "react"
import "./style.css"

const Product = ({product}) => {
    const{name, price, rating, image} = product
    return(
        <>
        <div className="product">
            <div className="product-image">
                <img src={'/images/${image}'} alt="" />
            </div>
                
            <div className="product-info">
                <div className="product-info-left">
                    <h4>{name}</h4>
                    <h5>Price: {price}</h5>
                </div>
                
                <div className="product-info-right">
                    <h5>Rating: {rating}</h5>
                </div>
            </div>
        </div>
        </>
    );
}
export default Product;