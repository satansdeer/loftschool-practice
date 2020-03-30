// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

function * gen() {
  console.log("Start")
  const value1 = yield("Что-то другое");
  console.log("First value", value1)
  const value2 = yield;
  console.log('Second value', value2)
  console.log("Finish")
}

const iter = gen() // {next: function() {}}

console.log(iter.next()) // {value: "first yield value", done: false}
console.log(iter.next("stop")) // {value: undefined, done: false}
// console.log(iter.next("Outside value 2"))
// console.log(iter.next("test"))