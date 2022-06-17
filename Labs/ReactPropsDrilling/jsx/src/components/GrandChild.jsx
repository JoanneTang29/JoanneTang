// 1. IMPORT REACT
import React from 'react';

// 2. ADDITIONAL IMPORTS

// 3. CREATE COMPONENT
const GrandChild = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.cheeseTwo}</h1>
    </div>
  );
};

// 4. EXPORT COMPONENT
export default GrandChild;
