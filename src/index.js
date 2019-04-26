import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactLoadableExample from './ReactLoadableExample';
import ReactLazyExample from './ReactLazyExample';
//import './ReduxDevToolsExample'
import ReactMobxExample from './ReactMobxExample'
// import './ReactMemoizationExample';
import ClassicContextExample from './ClassicContextExample';
import ContextHooksExample from './ContextHooksExample';
import HocHookRenderProps from './HocHookRenderProps';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactLoadableExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
