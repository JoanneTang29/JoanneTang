// 1. Import react
import React from 'react';

// 2. Additional imports
import Child from './Child';
import Component from './Component';
import FinalComponent from './FinalComponent';

// 3. Create functional components
const App = () => {
  // Lets create a variable
  let variable;

  // Lets creates a function
  const setVariable = (data) => {
    variable = data;
  };
  return (
    <div>
      <h1>App Component</h1>
      <Child greeting={'Hello World'} setVariable={setVariable} />
      {/* <Component /> */}
      <FinalComponent />
    </div>
  );
};

// 4. Export components
export default App;
