const selectAuthState = (state) => state.auth;

export const selectUser = (state) => selectAuthState(state).user;
export const selectToken = (state) => selectAuthState(state).token;
export const selectIsLoggedIn = (state) => selectAuthState(state).isLoggedIn;
export const selectIsRefreshing = (state) =>
  selectAuthState(state).isRefreshing;
export const selectError = (state) => selectAuthState(state).error;


