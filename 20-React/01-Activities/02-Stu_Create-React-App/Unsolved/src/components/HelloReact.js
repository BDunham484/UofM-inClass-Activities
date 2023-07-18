import React from 'react';

// TODO: Add a comment explaining what a react component is
function HelloReact() {
  const text = 'some text';

  const clickMe = () => {
    console.log("I got clicked!")
  }

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return <>
  <p>Hello World! Here is {text}</p>;
  <button onClick={clickMe}>click me</button>
  </>
}

export default HelloReact;
