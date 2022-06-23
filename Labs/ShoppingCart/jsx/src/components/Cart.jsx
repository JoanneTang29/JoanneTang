import React from 'react';

const Cart = (props) => {
  const { cartItems, handleAddToCart } = props;
  const total = cartItems.reduce((accumulator, element) => {
    console.log('here number');
    return (accumulator += element.price);
  }, 0);
  return (
    <div className="cartContainer">
      <h2>Shopping Cart</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div>
          <div>
            {item.name} ${item.price}
          </div>
        </div>
      ))}
      <h3>Total: ${Math.round((total + Number.EPSILON) * 100) / 100}</h3>
    </div>
  );
};

export default Cart;
