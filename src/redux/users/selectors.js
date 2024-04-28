export const selectUsers = (state) => state.users.items || [];
export const selectUser = (state, id) => state.users.items.find((user) => user.id === id);
export const selectTotalCount = (state) => state.users.totalCount || 0;
export const selectIsLoading = (state) => state.users.loading;
export const selectError = (state) => state.users.error;
