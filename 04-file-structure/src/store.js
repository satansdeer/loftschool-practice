import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

// Создайте sagaMiddleware

const createAppStore = () => {
  // Подключите корневой редьюсер
  // Скорее всего вы захотите подключить Redux DevTools
  // Не забудьте подключить sagaMiddleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createAppStore;
