// 1. Import react
import React from 'react';

// 2. Additional imports

// 3. Create component
const SenderChild = (props) => {
  console.log(props);
  return (
    <button
      onClick={() => {
        return props.updateState('Hey there!');
      }}
    >
      Click Me
    </button>
  );
};

// 4. Export component
export default SenderChild;
