import { createStore } from "redux";
import rootReducer from "./reducer/index";
import {
  persistStore,
  persistCombineReducers,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

function configureStore(initialState) {
  const config = {
    key: "root",
    storage
  };

  const reducer = persistCombineReducers(config, { root: rootReducer });

  const store = createStore(reducer, initialState);

  let persistor = persistStore(store, null, () => {
    store.getState(); // if you want to get restoredState
  });

  return { store, persistor };
}

export default configureStore;
