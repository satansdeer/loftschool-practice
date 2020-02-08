import { createAction } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE
export const fetchRequest = createAction('FOLLOWERS_FETCH_REQUEST');
export const fetchSuccess = createAction('FOLLOWERS_FETCH_SUCCESS');
export const fetchFailure = createAction('FOLLOWERS_FETCH_FAILURE');
