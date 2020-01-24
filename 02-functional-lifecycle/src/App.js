import React from 'react';
import './App.css';

class ClassComponent extends React.Component {
  componentDidMount(){

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  render() {
    <>Class Component</>
  }
}

function App() {
  React.useEffect(() => {
    // componentDidMount
    // componentDidUpdate
    return () => {
      // ComponentWillUnmount
    }
  }, [])

  return (
    <>Functional component</>
  );
}

export default App;
