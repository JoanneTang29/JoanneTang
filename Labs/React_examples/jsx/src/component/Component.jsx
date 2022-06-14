import React from 'react';

const Component = () => {
  // Create an array of object
  const dogs = [
    { name: 'Sparky', age: 5 },
    { name: 'Spot', age: 15 },
    { name: 'Ralph', age: 49 },
    { name: 'Fido', age: 55 },
  ];

  // Create a list of dogs
  const dogList = dogs.map((dog) => {
    return (
      <div key={dog.name} style={{ backgroundColor: 'red' }}>
        <h1>{dog.name}</h1>
        <h2>{dog.age}</h2>
      </div>
    );
  });

  /* [

  ]*/
  return (
    <div>
      <h1>Component</h1>
      {dogList}
    </div>
  );
};

export default Component;
