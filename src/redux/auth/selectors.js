export const selectIsAuth = (state) => state.auth.isAuth;
export const selectMe = (state) => state.auth.me || null;
export const selectMeProfile = (state) => state.auth.profile || null;
export const selectLoadingAuth = (state) => state.auth.loading;
export const selectErrorAuth = (state) => state.auth.error;
