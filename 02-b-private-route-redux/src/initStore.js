import { createStore } from "redux";

export const initStore = () => {
  const rootReducer = (state = { authed: false }, action) => {
    switch (action.type) {
      case "LOGIN":
        return { authed: true };
      case "LOGOUT":
        return { authed: false };
      default:
        return state;
    }
  };

  return createStore(rootReducer);
};
