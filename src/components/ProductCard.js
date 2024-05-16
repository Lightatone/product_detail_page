import React from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import "./ProductCard.css";
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
                {active ? <FaChevronCircleRight color='#007bff' /> :  <FaChevronCircleLeft onClick={onClick} color='green'/>}
            </button>
        </div>
    )
}
export default ProductCard;
