import React from 'react';

export default jest.fn(({ onClick, buttonLabel }) => (
  <button data-testid="mock-button" onClick={onClick}>
    {buttonLabel}
  </button>
));
