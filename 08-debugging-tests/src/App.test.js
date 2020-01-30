import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { debug } from 'util';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  console.log("SOmething")
  ReactDOM.unmountComponentAtNode(div);
});
