import { CounterActionType, CounterState, CounterActions } from "./types";
import { Action } from "redux";

const initialState: CounterState = {
  count: 0
};

const count = (
  state: CounterState = initialState,
  action: Action | CounterActions
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CounterActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default count;
