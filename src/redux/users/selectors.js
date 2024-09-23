export const selectUsers = (state) => state.users.items || [];
export const selectTotalCountUsers = (state) => state.users.count || 0;
export const selectNextUrl = (state) => state.users.next;
export const selectPreviousUrl = (state) => state.users.previous;
export const selectLoadingUsers = (state) => state.users.loading;
export const selectErrorUsers = (state) => state.users.error;
// export const selectUser = (state, id) => {
//   if (state.users.items !== null) {
//     state.users.items.find((user) => user.id === id)
//   } else {
//     return null;
//   }
// };
