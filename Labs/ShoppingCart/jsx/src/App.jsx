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
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    const isProduct = cartItems.find(
      (element) => element.name === product.name
    );
    console.log('product', isProduct);
    if (isProduct) {
      console.log('product found');
      setCartItems(
        cartItems.map((element) =>
          element.name === product.name ? { ...isProduct } : element
        )
      );
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };
  return (
    <div className="appContainer">
      <Header />
      <Hiring />
      <Form />
      <Main products={products} handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

// 4. Export
export default App;
