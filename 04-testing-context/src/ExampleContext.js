import React from 'react';

export const ExampleContext = React.createContext({})

export const ExampleProvider = ({children}) => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return <ExampleContext.Provider value={{count, increment, decrement}}>
    {children}
  </ExampleContext.Provider>
}