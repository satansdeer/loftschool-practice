import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import LifecycleExample from './LifecycleExample';
import BindExample from './BindExample';
// import ShouldCompUpdEx from './ShouldCompUpdEx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BindExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
