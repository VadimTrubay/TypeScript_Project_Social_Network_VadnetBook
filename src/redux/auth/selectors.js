export const selectIsAuth = (state) => state.auth.isAuth;
export const selectMe = (state) => state.auth.me || null;
export const selectLoadingAuth = (state) => state.auth.loading;
