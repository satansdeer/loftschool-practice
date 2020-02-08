import React from 'react';

export const ReusableButton = (onClick, buttonLabel) => (
  <button onClick={onClick}>{buttonLabel}</button>
);

export default ReusableButton;
