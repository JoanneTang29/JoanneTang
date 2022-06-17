// 1. Import react
import React from 'react';

// 2. Additional imports
import Counter from './Counter';
import FormComponent from './FormComponent';
import FormControlled from './FormControl';
import FormUncontrolled from './FormUncontrolled';

// 3. Create component
const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <FormComponent /> */}
      {/* <FormControlled /> */}
      <FormUncontrolled />
    </div>
  );
};

// 4. Export component
export default App;
