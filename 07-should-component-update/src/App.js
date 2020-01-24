import React, {useMemo} from "react";
import "./App.css";

function Child1({ a }) {
  return <div>Child1: {a}</div>;
}

function Child2({ b }) {
  console.log("Child2 rendered", b)
  return <div>Child2: {b}</div>;
}

function Parent({ a, b }) {
  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // Only re-rendered if `b` changes:
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <div>
      {child1}
      {child2}
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <Parent a={count} b={2 * Math.round(count / 2)} />
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
    </>
  );
}

export default App;
