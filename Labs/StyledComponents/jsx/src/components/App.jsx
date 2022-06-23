import React from 'react';
import Component from './Component';
import Title from './Title';
import Greeting from './Greeting';
import IsEven from './IsEven';

const App = () => {
  return (
    <div>
      {/* <Component>
        <Title>
          <Greeting />
        </Title>
      </Component> */}
      <IsEven number={12} />
    </div>
  );
};

export default App;
