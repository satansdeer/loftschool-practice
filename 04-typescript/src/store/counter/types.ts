import { Action } from "redux";

export interface CounterState {
    count: number;
}

export enum CounterActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}

export interface IncrementAction extends Action {
    type: CounterActionType.INCREMENT;
}

export interface DecrementAction extends Action {
    type: CounterActionType.DECREMENT;
}

export type CounterActions = IncrementAction | DecrementAction;
