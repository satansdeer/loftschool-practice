import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import Counter from './Counter'
import {Provider} from 'react-redux'
import './ReduxBatchingExample'

// const rootReducer = (state = {counter: 0}, action) => {
//   switch (action.type) {
//     case "INCtEMENT":
//       return {counter: state.counter + 1};
//     case "DECREMENT":
//       return {counter: state.counter - 1};
//     default:
//       return state;
//   }
// };

// const persistConfig = {
//   key: "root",
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <Counter />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
