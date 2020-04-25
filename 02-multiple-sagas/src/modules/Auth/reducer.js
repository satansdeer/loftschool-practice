import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';
import { createSelector } from 'reselect';
// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey
const apiKey = handleActions(
  {
    [addApiKey]: (state, action) => action.payload
  },
  ''
);

export default combineReducers({ apiKey });

export const getApiKey = createSelector(
  state => state.auth.apiKey,
  apiKey => apiKey
);

export const getIsAuthorized = createSelector(
  state => state.auth.apiKey,
  apiKey => apiKey
);
