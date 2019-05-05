import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { take, fork, select } from 'redux-saga/effects'

const getCart = state => state.cart

function* checkout() {
  const cart = yield select(getCart)

  console.log('Redux saga', cart)
}

export function* rootSaga() {
  while (true) {
    yield take('CHECKOUT')
    yield fork(checkout)
  }
}

const reducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type, payload) => store.dispatch({ type, payload });

action("ADD_TO_CART", "apple");
action("ADD_TO_CART", "orange");
action("ADD_TO_CART", "banana");
action("CHECKOUT");