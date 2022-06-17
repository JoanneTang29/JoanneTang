// 1. IMPORT REACT
import React, { useState, useReducer } from 'react';

// 2. ADDITIONAL IMPORTS
import Child from './Child';
import StateContext from './../contexts/StateContext';

// 3. CREATE COMPONENT
const Parent = () => {
  // Let's create our reducer
  const reducer = (state, action) => {
    // Let's create our action
    const { type, payload } = action;

    // Let's check for our type
    switch (type) {
      // type is always uppercase
      case 'ADD':
        return state + 1;
      case 'SUBTRACT':
        return state - 1;
      default:
        return state;
    }
  };

  // PROVIDE AND INITIAL STATE TO OUR STORE
  const initialState = 0;

  // Let's create our state and our dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [state, setState] = useState(0);
  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <Child />
      </StateContext.Provider>
    </div>
  );
};

// 4. EXPORT
export default Parent;
