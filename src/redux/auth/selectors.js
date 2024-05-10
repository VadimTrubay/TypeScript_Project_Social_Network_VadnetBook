export const selectUserId = (state) => state.auth.userId;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUserEmail = (state) => state.auth.me.email;
export const selectUserLogin = (state) => state.auth.me.login;
export const selectMe = (state) => state.auth.me;