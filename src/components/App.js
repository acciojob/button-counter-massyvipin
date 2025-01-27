import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
  const ClickCounter = () => {
  const [count, setCount] = useState(0);
    
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
