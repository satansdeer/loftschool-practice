import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены
export const fetchRequest = createAction('USER_FETCH_REQUEST');
export const fetchSuccess = createAction('USER_FETCH_SUCCESS');
export const fetchFailure = createAction('USER_FETCH_FAILURE');
