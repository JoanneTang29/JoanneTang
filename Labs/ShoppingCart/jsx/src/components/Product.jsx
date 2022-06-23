// 1. Import React
import React from 'react';

// 2. Additional imports

// 3. Create component
const Product = (props) => {
  const { product, handleAddToCart } = props;
  return (
    <div className="productContainer">
      <h3>
        {product.name} <span>${product.price}</span>
      </h3>
      <p>{product.description}</p>
      <div>
        <button class="ui button" onClick={() => handleAddToCart(product)}>
          Add to Cart
        </button>
        {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
      </div>
    </div>
  );
};

// 4. Export
export default Product;
