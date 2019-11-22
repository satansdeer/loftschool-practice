import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

import count from "./counter/reducers";
import { CounterState } from "./counter/types";

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: CounterState) =>
    createStore(
        count,
        initialState,
        composeEnhancers(applyMiddleware(logger))
    );

const store = configureStore();

export default store;
