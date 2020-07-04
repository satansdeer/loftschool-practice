import React, { useState } from "react";

export const SomeStateContext = React.createContext({foo: "bar"});

export const SomeStateProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return <SomeStateContext.Provider value={{increment, count, decrement}}>{children}</SomeStateContext.Provider>;
};
