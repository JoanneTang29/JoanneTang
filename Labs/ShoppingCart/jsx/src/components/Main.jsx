// 1. Import React
import React from 'react';

// 2. Additional imports
import Product from './Product';

// 3. Create component
const Main = (props) => {
  const { products, handleAddToCart } = props;
  return (
    <div className="mainContainer">
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <Product product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

// 4. Export
export default Main;
