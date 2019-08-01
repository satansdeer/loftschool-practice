import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function sendCart() {
  return (dispatch, getState) => {
    const { cart } = getState();

    console.log("Thunk", cart); // Send to server
  };
}

function todos(state = { todos :[] }, action) {
  switch (action.type) {
  case "ADD__TODO":
    return {...state,
      todos: [...state.todos, {
        text: action.text,
      }]
  }
  default:
    return state;
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

const store = createStore(reducer, applyMiddleware(thunk));

const action = (type, payload) => store.dispatch({ type, payload });

action("ADD_TO_CART", "apple");
action("ADD_TO_CART", "orange");
action("ADD_TO_CART", "banana");
store.dispatch(sendCart());
