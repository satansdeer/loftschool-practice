import React from "react";
import useCounter from "./useCounter";

class Counter extends React.Component {
  state = { count: 0 };
  increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }));
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

// const Counter = () => {
//   const { count, increment, decrement } = useCounter(0);
//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       <p>{count}</p>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// };

export default Counter;
