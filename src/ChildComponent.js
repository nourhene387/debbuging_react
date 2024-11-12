import React from 'react';

function ChildComponent({ name, counter }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default ChildComponent;