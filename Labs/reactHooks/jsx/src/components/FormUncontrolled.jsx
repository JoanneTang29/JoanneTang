import React from 'react';
import { useRef } from 'react';

const FormUncontrolled = () => {
  // Create references
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Create a function to submit our form
  const handleFormSubmit = (e) => {
    // Prevent the form from reloading our application
    e.preventDefault();
    console.log({
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    });
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="write name here" ref={nameInputRef} />
        <input type="number" placeholder="write age here" ref={ageInputRef} />
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default FormUncontrolled;
