import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { incrementCounter } from './incrementCounter'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  const onClick =() => {
    dispatch(incrementCounter())
  }

  return <button title="Click Me" onClick={onClick}>Count: {count}</button>
}

export default Counter