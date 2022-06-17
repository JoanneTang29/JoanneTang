// 1. Import react
import React, { useState, useEffect } from 'react';

// 2. Additional imports

// 3. Create component
const Counter = () => {
  // Let's declare new state inside of our component
  const [counter, setCounter] = useState(0);

  // second piece of state
  const [evenCounter, setEvenCounter] = useState(0);

  // Let's create an effect to render our component everytime our evenCounter state changes; if the array is empty it will only run (console.log) one time; you can but another argument in the array meaning it will fire for either argument.
  useEffect(() => {
    // Let's log something inside our console
    console.log('I am just a random log');
  }, [evenCounter]);

  // Let's create a function
  const handleAddOne = () => {
    if (counter % 2 === 0) {
      setEvenCounter(evenCounter + 1);
    }

    // If counter is not even just update counter
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Even counter: {evenCounter}</h1>
      <button onClick={handleAddOne}>Click Me to Add One</button>
    </div>
  );
};

// useEffect
// 1. By passing nothing as a second parameter of useEffect - this will fire everytime something changes on the page
/* useEffect(() => {
//     Do something here
}) */

// 2. By passing an empty array as a second parameter - this will only run one time
/* useEffect(() => {
//     Do something here
}, []) */

// 3. By passing an array with data inside of it
/* useEffect(() => {
//     Do something here
}, [data]) */

// 4. Export component
export default Counter;
