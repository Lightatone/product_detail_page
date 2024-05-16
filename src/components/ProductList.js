import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import './ProductList.css';

function ProductItem({product, onClick, active}) {
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

export default function ProductList({products, onSelect, activeProduct}) {
  return (
    <div className={'products-container'}>
        {products.map(product => {
            return (
                <ProductItem
                    active={activeProduct && activeProduct.id === product.id}
                    onClick={() => onSelect(product)}
                    product={product} key={product.id}/>
            )
        })}
    </div>
  );
}