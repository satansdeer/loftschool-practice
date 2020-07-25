import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

export const counterContext = createContext();

export const CounterProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    count: 1,
    increment() {
      store.count++;
    },
    decrement() {
      store.count--;
    }
  }));

  return (
    <counterContext.Provider value={store}>{children}</counterContext.Provider>
  );
};
