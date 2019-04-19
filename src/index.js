import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContextExample from './ContextExample';
import RefExample from './RefExample';
import ForwardRefExample from './ForwardRefExample';
import FormInputsValidation from './FormInputsValidation';
import HooksExample from './HooksExample'
import RenderProps from './RenderProps'
import GenerateLayout from './GenerateLayout';
import ReactRouterExample from './ReactRouterExample';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ContextExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
