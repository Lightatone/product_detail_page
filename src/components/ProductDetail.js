import '../styles/ProductPage/ProductDetail.scss';
import Rate from "./Rate";
export default function ProductDetail({product}) {
    if (!product) {
        return <></>;
    }

    return (
        <div className={'product-detail'}>
            <p className={'product-price'}>
                $ {product.price}
            </p>
          
            <h2 className={'product-title'}>
                {product.title}
            </h2>
            <p className={'product-description'}>
                {product.description}
            </p>
            <div>
                <Rate rate={product.rating.rate} count={product.rating.count}/>
            </div>
            <div className={'product-cart-button'}>
                <button >Add to Cart</button>
            </div>
        </div>
    )
}