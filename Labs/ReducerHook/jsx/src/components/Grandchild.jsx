// 1. IMPORT REACT
import React, { useContext } from 'react';

// 2. ADDITIONAL IMPORTS
import StateContext from './../contexts/StateContext';

// 3. CREATE COMPONENT
const Grandchild = () => {
  const ctx = useContext(StateContext);
  console.log(ctx);

  // Create a function responsible for dispatching our addition action
  const dispatchAdditionAction = (obj) => {
    return ctx.dispatch(obj);
  };

  // Create a function responsible for dispatching our subtraction action
  const dispatchSubtractAction = (obj) => {
    return ctx.dispatch(obj);
  };

  return (
    <div>
      <h1>{ctx.state}</h1>

      <button
        onClick={() => {
          return dispatchAdditionAction({ type: 'ADD', payload: null });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          return dispatchSubtractAction({ type: 'SUBTRACT', payload: null });
        }}
      >
        Subtract
      </button>
    </div>
  );
};

// 4. EXPORT
export default Grandchild;
