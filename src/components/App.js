import React, { useState } from 'react';
import React from "react";
import './../styles/App.css';

const App = () => {
  const ClickCounter = () => {
  // Initialize counter state to 0 using useState hook
  const [count, setCount] = useState(0);

  // onClick event handler to increment the counter
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
       <button onClick={handleClick}>Click Me</button>
      <p>Button clicked {count} times.</p>
    </div>
  )
}

export default App
