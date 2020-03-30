import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useObserver } from "mobx-react-lite";
import { CounterProvider, counterContext } from "./CounterStore";

const First = () => {
  const store = useContext(counterContext);

  return useObserver(() => (
    <div>
      <h2>Count: {store.count}</h2>
      <button onClick={store.increment}>+</button>
      <button onClick={store.decrement}>-</button>
    </div>
  ));
};


const Second = () => {
  const store = useContext(counterContext);

  const [products, errors, submit] = useCart()

  return useObserver(() => {

    return (<div>
      <h2>Count: {store.count}</h2>
      <button onClick={store.increment}>+</button>
      <button onClick={store.decrement}>-</button>
    </div>)
  });
};

function App() {
  return (
    <CounterProvider>
      <First />
      <Second />
    </CounterProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
