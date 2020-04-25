import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { createSelector } from 'reselect';
// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер
const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchSuccess]: (state, action) => action.payload,
    [fetchFailure]: () => ''
  },
  ''
);

const error = handleActions(
  {
    [fetchFailure]: (state, action) => action.payload,
    [fetchFailure]: () => ''
  },
  ''
);

export default combineReducers({ isLoading, data, error });

export const getFollowers = createSelector(
  state => state.followers.data,
  data => data
);

export const getIsLoading = createSelector(
  state => state.followers.isLoading,
  isLoading => isLoading
);

export const getError = createSelector(
  state => state.followers.error,
  error => error
);
