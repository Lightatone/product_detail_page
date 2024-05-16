import React from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import "../styles/ProductPage/ProductCard.scss";
function ProductCard({product, onClick, active}) {
    if (!product) {
        return <></>;
    }
    return (
        <div className={'product-item'}>
            <img onClick={onClick} src={product.image} alt={product.title + ' image'}/>
            <p onClick={onClick} className={'product-title'}>
                {product.title}
            </p>
            <button className="chevron-button">
                {active ? <FaChevronCircleRight className="icon" color='#007bff' /> :  <BiChevronLeftCircle className="icon" onClick={onClick} color='#007bff'/>}
            </button>
        </div>
    )
}
export default ProductCard;