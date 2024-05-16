import './App.css';
import {useState, useEffect} from 'react';
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import {BsXLg} from 'react-icons/bs';
function App() {
  const [products, setProducts] = useState([]); // List of products
  const [loading, setLoading] = useState(false);    // Whether the data is being loaded
  const [activeProduct, setActiveProduct] = useState(null); // null or product
  useEffect(() => {
    // Fetch products
      setLoading(true); // Set loading to true
      fetch(`https://fakestoreapi.com/products?limit=5`)
          .then(res => res.json())
          .then(data => {
            setProducts(data);
          }).catch(err => {
              console.log(err);
          }).finally(() => {
              setLoading(false);  // Set loading to false
          });
  }, []);
return (
  <div className={'app'}>
    <div className={'container'}>
      <h1>
          DayDream Mall
      </h1>
        <p className={'website-introduction'}>
            DayDream Mall is dedicated to providing you with high-quality products and a seamless shopping experience. We carefully select a variety of fashionable and trendy items, household items, electronic and digital products, etc., ensuring that each item undergoes strict control and brings you a satisfactory shopping experience.
        </p>
        {loading ? (
            <p>loading...</p>
        ): (
            <>
                <main>
                    <ProductList
                        activeProduct={activeProduct}
                        onSelect={setActiveProduct}
                        products={products}/>
                    <div className={'detail'}>
                        <ProductDetail product={activeProduct}/>
                    </div>
                </main>
                {/* mobile */}
                <div className={'detail-mobile'} style={{
                    bottom: activeProduct ? 0 : '-100%'
                }}>
                    <div className={'detail-action'}>
                        <button onClick={() => {
                            setActiveProduct(null);
                        }} className={'close-button'}>
                            <BsXLg/>
                        </button>
                    </div>
                    <ProductDetail product={activeProduct}/>
                </div>
            </>
        )}
        
    </div>
  </div>
);
}

export default App;