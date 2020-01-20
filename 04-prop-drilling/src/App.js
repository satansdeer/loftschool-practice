import React from 'react';
import './App.css';

const GrandChildComponent = ({someProp}) => {
  return <>{someProp}</>
}

const ChildComponent = ({someProp}) => {
  return <GrandChildComponent someProp={someProp}/>
}

function App() {
  return (
    <div>
      <ChildComponent someProp="Pass The Prop" />
    </div>
  );
}

export default App;
