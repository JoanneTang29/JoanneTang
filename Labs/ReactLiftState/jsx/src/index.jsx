// 1. Import react
import React from 'react';

// 2. Import ReactDOM
import ReactDOM from 'react-dom';

// 3. Additional imports
import Parent from './components/Parent';

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

// 4. Render component onto the screen
ReactDOM.render(<App />, document.querySelector('#root'));
