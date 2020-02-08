import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render} from '@testing-library/react'
// import {render, fireEvent, getByTitle} from '@testing-library/react'

import Counter from './Counter'
import counterReducer from './counterReducer'

// Create a real redux store
const store = createStore(counterReducer, {
  count: 0
})

it('increments the counter', () => {
  const {container, fireEvent, getByTitle} = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  )

  // const {container} = render(
  //   <Provider store={store}>
  //     <Counter />
  //   </Provider>
  // )

  const button = getByTitle(container, 'Click Me')

  fireEvent.click(button)
  expect(button).toHaveTextContent('Count: 1')

  fireEvent.click(button)
  expect(button).toHaveTextContent('Count: 2')
})