import React, { useState } from 'react';

const Hiring = () => {
  const [toggleHiring, setToggleHiring] = useState(false);
  const handleToggleHiring = () => {
    setToggleHiring(!toggleHiring);
  };
  return (
    <div className="hiringContainer">
      <div>
        {toggleHiring ? (
          <h4>We are hiring!</h4>
        ) : (
          <h4>Sorry, we are not hiring.</h4>
        )}
      </div>
      <button onClick={handleToggleHiring}>Hiring Toggle</button>
    </div>
  );
};

export default Hiring;
