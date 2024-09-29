export const selectUserById = (state) => state.users.userById;

export const selectUsers = (state) => state.users.users.items || [];
export const selectTotalCountUsers  = (state) => state.users.users.count || 0;

export const selectFollowers = (state) => state.users.followers.items || [];
export const selectTotalCountFollowers  = (state) => state.users.followers.count || 0;

export const selectFollowing = (state) => state.users.following.items || [];
export const selectTotalCountFollowing  = (state) => state.users.following.count || 0;

export const selectRefresh = (state) => state.users.refreshed;
export const selectLoadingUsers = (state) => state.users.loading;
