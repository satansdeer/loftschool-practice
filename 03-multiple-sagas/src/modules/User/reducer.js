import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { createSelector } from 'reselect';
// Обратите внимание на тесты, они помогут вам написать код редьюсера
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
    [fetchSuccess]: () => ''
  },
  ''
);

export default combineReducers({ isLoading, data, error });

export const getUser = createSelector(
  state => state.user.data,
  data => data
);

export const getIsLoading = createSelector(
  state => state.user.isLoading,
  isLoading => isLoading
);

export const getError = createSelector(
  state => state.user.error,
  error => error
);
