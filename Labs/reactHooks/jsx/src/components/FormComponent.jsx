// 1. Import react
import React, { useRef } from 'react';

// 2. Additional imports

// 3. Create component
const FormComponent = () => {
  // Create our first reference
  const inputRef = useRef();
  console.log(inputRef);

  // Create reference to the pTag
  const pTagRef = useRef();

  // Add handle function
  const handleClick = () => {
    // console.log(inputRef.current.value);
    console.log(pTagRef.current.textContent);
  };
  return (
    <div>
      <h1>Form Component</h1>
      <input type="text" ref={inputRef} />
      <p ref={pTagRef}>This is a pTag</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
// 4. Export component
export default FormComponent;
