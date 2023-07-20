import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
//exports the component
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  //sets state and it's initial value and the funtion to increment it
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  //the count state is updated by one every time it is called
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // decrements the count state by one on each function call
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/*the count and each function is being passed to the component */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
