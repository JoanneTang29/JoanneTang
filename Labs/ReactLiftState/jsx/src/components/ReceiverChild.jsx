// 1. Import react
import React from 'react';

// 2. Additional imports

// 3. Create component
const ReceiverChild = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.state}</h1>
    </div>
  );
};

// 4. Export component
export default ReceiverChild;
