export const selectUsers = (state) => state.users.items || [];
export const selectUser = (state) => state.users;
export const selectIsLoading = (state) => state.users.loading;
export const selectError = (state) => state.users.error;
export const selectTotalCount = (state) => state.users.totalCount || 0;
// export const selectUser = (state, id) => {
//   if (state.users.items !== null) {
//     state.users.items.find((user) => user.id === id)
//   } else {
//     return null;
//   }
// };
