import React, { Component, useState } from "react";

// ------- Hook example

// function useCounter({ initialState }) {
//   const [count, setCount] = useState(initialState);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   return [count, { increment, decrement }];
// }

// function App() {
//   const [myCount, { increment, decrement }] = useCounter({ initialState: 0 });
//   return (
//     <div>
//       <p>{myCount}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default App

// ------- Render Props Example

// class WithCount extends Component {
//     state = {count: 0}

//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     decrement = () => {
//         this.setState({count: this.state.count - 1})
//     }

//     render(){
//         const {children} = this.props;
//         const {count} = this.state;
//         return children(count, this.increment, this.decrement)
//     }
// }

// function App({myCount, increment, decrement}) {
//   return (
//     <div>
//       <p>{myCount}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default () => (
//     <WithCount>
//         {(myCount, increment, decrement) => {
//             return <App myCount={myCount} increment={increment} decrement={decrement}/>
//         }}
//     </WithCount>
// )

// ------- HOC example

const withCounter = WrappedComponent => {
  return class extends Component {
    state = { count: 0 };

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    render() {
      const {count} = this.state
      return <WrappedComponent myCount={count} increment={this.increment} decrement={this.decrement}  />;
    }
  };
};

function App({myCount, increment, decrement}) {
  return (
    <div>
      <p>{myCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default withCounter(App)
