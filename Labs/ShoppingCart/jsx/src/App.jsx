// 1. Import React
import React, { useState } from 'react';

// 2. Additional imports
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import Hiring from './components/Hiring';
import Form from './components/Form';
import data from './data';
import './main.css';

// 3. Create component
const App = () => {
  const [productData, setProductData] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  // Add items to cart
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product }]);
  };
  return (
    <div className="appContainer">
      <Header />
      <Hiring />
      <Form products={productData} setProductData={setProductData} />
      <Main products={productData} handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

// 4. Export
export default App;
