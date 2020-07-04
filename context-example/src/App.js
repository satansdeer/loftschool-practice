import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { SomeStateContext } from './SomeStateContext';

function App() {
  const {count, increment} = useContext(SomeStateContext)
  const someContextValue = useContext(SomeStateContext)

  console.log(someContextValue)

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
