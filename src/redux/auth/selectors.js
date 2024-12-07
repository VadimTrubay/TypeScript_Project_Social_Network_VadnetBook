export const selectIsAuth = (state) => state.auth.isAuth;
export const selectAccessToken = (state) => state.auth.access_token;
export const selectMe = (state) => state.auth.me || null;
export const selectLoadingAuth = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error || null;
