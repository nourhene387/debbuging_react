import React, { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  // State for holding a user's name and a counter
  const [name, setName] = useState('ali');
  const [counter, setCounter] = useState(0);

  // Function to handle name change
  const handleNameChange = () => {
    setName(name === 'ali' ? 'sallah' : 'ali');
    console.log(name);
  };

  // Function to increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>React Debugging Example</h1>
      <button onClick={handleNameChange}>Toggle Name</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      
      {/* Pass props to child components */}
      <ChildComponent name={name} counter={counter} />
    </div>
  );
}

export default App;
