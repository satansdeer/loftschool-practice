import { createSelector } from "reselect";

export const selectLogin = (state) => state.login;

export const selectAuthenticated = createSelector(
  selectLogin,
  (loginState) => loginState.authenticated
);
