import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList({products, onSelect, activeProduct}) {
  return (
    <div className={'products-container'}>
        {products.map(product => {
            return (
                <ProductCard
                    active={activeProduct && activeProduct.id === product.id}
                    onClick={() => onSelect(product)}
                    product={product} key={product.id}/>
            )
        })}
    </div>
  );
}

