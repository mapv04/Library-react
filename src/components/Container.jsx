import React from 'react';

function Container(props) {
  return (
    <div className="container mx-auto">
      <div className="pb-32">{props.component}</div>
    </div>
  );
}

export default Container;
