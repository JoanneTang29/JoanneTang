// 1. IMPORT REACT
import React from 'react';

// 2. ADDITIONAL IMPORTS
import GrandChild from './GrandChild';

// 3. CREATE COMPONENT
const Child = (props) => {
  return (
    <div>
      <h1>Child Component</h1>
      <GrandChild cheeseTwo={props.cheese} />
    </div>
  );
};

// 4. EXPORT COMPONENT
export default Child;
