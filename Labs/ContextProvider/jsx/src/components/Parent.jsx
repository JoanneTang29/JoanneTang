// 1. IMPORT REACT
import React, { createContext, useContext } from 'react';

// 2. ADDITIONAL IMPORTS

// Create our context provider
const context = createContext(null);

console.log(context);

const GrandChild = () => {
  // Let's retrieve our context
  const ctx = useContext(context);
  console.log(ctx);
  return (
    <div>
      <h1>{ctx}</h1>
    </div>
  );
};

const Child = () => {
  return (
    <div>
      <GrandChild />
    </div>
  );
};

// 3. CREATE COMPONENT
const Parent = () => {
  return (
    <div>
      <context.Provider value={'cheese'}>
        <Child />
      </context.Provider>
    </div>
  );
};

// 4. EXPORT COMPONENT
export default Parent;
