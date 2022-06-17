// 1. IMPORT REACT
import React from 'react';

// 2. ADDITIONAL IMPORTS
import Grandchild from './Grandchild';

// 3. CREATE COMPONENT
const Child = () => {
  return (
    <div>
      <Grandchild />
    </div>
  );
};

// 4. EXPORT
export default Child;
