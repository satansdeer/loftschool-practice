import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, fireEvent } from 'react-testing-library';

import App from './App';
import ReusableButton from './ReusableButton';

// This doesn't work
// jest.mock('./ReusableButton');

// This works
jest.mock('./ReusableButton', () =>
  jest.fn(({ onClick, buttonLabel }) => (
    <button data-testid="mock-button" onClick={onClick}>
      {buttonLabel}
    </button>
  ))
);

afterEach(cleanup);

test('user can increment the count by clicking the button', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('count').textContent).toEqual('0');

  fireEvent.click(getByTestId('mock-button'));

  expect(getByTestId('count').textContent).toEqual('1');
});
