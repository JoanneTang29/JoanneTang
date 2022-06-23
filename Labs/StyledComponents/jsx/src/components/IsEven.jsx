import React from 'react';

const IsEven = (props) => {
  console.log(props);
  // Create a variable to hold the result from the if statement
  //   let result;
  //   if (props.number % 2 === 0) {
  //     result = <h1>Is even</h1>;
  //   } else {
  //     result = <h1>Is odd</h1>;
  //   }

  //   return result;

  return props.numer % 2 === 0 ? <h1>it is even</h1> : <h1>it is odd</h1>;
};

export default IsEven;
