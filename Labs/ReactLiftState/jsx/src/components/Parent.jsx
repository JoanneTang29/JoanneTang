// 1. Import react
import React, { useState } from 'react';

// 2. Additional imports
import SenderChild from './SenderChild';
import ReceiverChild from './ReceiverChild';

// 3. Create component
const Parent = () => {
  // Let's create a piece of state
  const [state, setState] = useState('hello');

  // Let's create a function to update our piece of state
  const updateState = (data) => {
    setState(data);
  };
  return (
    <div>
      <SenderChild updateState={updateState} />
      <ReceiverChild state={state} />
    </div>
  );
};

// 4. Export component
export default Parent;
