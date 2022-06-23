import React, { useState } from 'react';

const Form = (props) => {
  const { products, setProductData } = props;
  const [productForm, setProductForm] = useState({
    name: '',
    price: 0,
    description: '',
  });

  // Method to change user input
  const handleChange = (e) => {
    setProductForm((prevalue) => {
      return {
        ...prevalue,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setProductForm({
      ...productForm,
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
    });
    console.log('here');
    const newItem = {
      name: e.target.name.value,
      price: parseInt(e.target.price.value),
      description: e.target.description.value,
    };
    setProductData([...products, newItem]);
  };

  return (
    <div className="formContainer">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          type="text"
          defaultValue={productForm.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          name="price"
          type="number"
          placeholder="0"
          defaultValue={productForm.price}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          name="description"
          type="text"
          placeholder="Description goes here"
          defaultValue={productForm.description}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
      <div className="preview">
        <h1>Preview new item</h1>
        <h3>{productForm.name}</h3>
        <h3>{productForm.price}</h3>
        <h3>{productForm.description}</h3>
      </div>
    </div>
  );
};

export default Form;
