import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import Button from './Button';

describe('', () => {
  // const wrapper = shallow(<Button />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
