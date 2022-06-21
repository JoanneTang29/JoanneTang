import React, { useState } from 'react';

const Form = () => {
  const [productForm, setProductForm] = useState({
    name: '',
    price: 0,
    description: '',
  });
  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productForm);
    setProductForm({ name: '', price: 0, description: '' });
  };
  return (
    <div className="formContainer">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={productForm.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          id="price"
          type="text"
          placeholder="0"
          value={productForm.price}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          id="description"
          type="text"
          placeholder="Description goes here"
          value={productForm.description}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
