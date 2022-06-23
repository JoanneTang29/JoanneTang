import React from 'react';

const Detail = (props) => {
  // history to push the id in the url
  console.log(props.match.params.id);
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default Detail;
