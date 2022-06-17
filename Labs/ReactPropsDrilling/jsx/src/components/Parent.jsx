// 1. IMPORT REACT
import React from 'react';

// 2. ADDITIONAL IMPORTS
import Child from './Child';

// 3. CREATE COMPONENT
const Parent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child cheese="gouda" />
    </div>
  );
};

// 4. EXPORT COMPONENT
export default Parent;
