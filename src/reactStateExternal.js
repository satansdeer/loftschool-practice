import React from 'react'

// === Fiber Node ===

/*
    {
        state
        render
        props
    }
*/

// === Dispatcher ===

// {
//   useState,
//   useEffect,
//   ...
// }

// https://github.com/facebook/react/blob/5f06576f51ece88d846d01abd2ddd575827c6127/packages/react-reconciler/src/ReactFiberScheduler.js#L1376

// === state ===

/*
    { 
      foo: 'foo',
      bar: 'bar',
      baz: 'baz',
    }
*/

/*
  {
    memoizedState: 'foo',
    next: {
      memoizedState: 'bar',
      next: {
        memoizedState: 'bar',
        next: null
      }
    }
  }
}
*/

// ===============

const ChildComponent = () => {
    useState('foo')
    useState('bar')
    useState('baz')
  
    return null
  }
  
  const ParentComponent = () => {
    const childFiberRef = useRef()
  
    useEffect(() => {
      let hookNode = childFiberRef.current.memoizedState
  
      assert(hookNode.memoizedState, 'foo')
      hookNode = hooksNode.next
      assert(hookNode.memoizedState, 'bar')
      hookNode = hooksNode.next
      assert(hookNode.memoizedState, 'baz')
    })
  
    return (
      <ChildComponent ref={childFiberRef} />
    )
  }