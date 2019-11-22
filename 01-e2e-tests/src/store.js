import rootReducer from './reducers';
import { createStore } from 'redux';

export default () => {
  const store = createStore(
    rootReducer,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  );

  return store;
};
