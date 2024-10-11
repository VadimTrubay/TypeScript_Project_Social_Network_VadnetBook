export const auth = "/auth";
export const profile = "/profile";
export const users = "/users";
export const dialogs = "/dialogs";
export const messages = "/messages";


export const mainUrls = {
  id: ":id",
  notFound: "*",
  auth: {
    me: `${auth}/me`,
    signup: `${auth}/signup`,
    signin: `${auth}/signin`,
    googleAuth: `${auth}/convert-token/`,
  },
  profile: {
    profile: `${profile}/`,
    edit: `${profile}/edit`,
    delete: `${profile}/delete`,
    setPhoto: `${profile}/edit/photo`,
    setStatus: `${profile}/edit/status`,
  },
  users: {
    users: (search: string, page: number) => `${users}/?search=${search}&page=${page}`,
    userById: (user_id: string) => `${users}/${user_id}`,
    followers: (page: number) => `${users}/followers?page=${page}`,
    following: (page: number) => `${users}/following?page=${page}`,
    follow: (user_id: string) => `${users}/follow/${user_id}`,
    unfollow: (user_id: string) => `${users}/unfollow/${user_id}`,
  },
  dialogs: {
    dialogs: `${dialogs}/`,
    deleteDialogById: (dialog_id: string) => `${dialogs}/${dialog_id}/`,
  },
  messages: {
    messagesByDialog: (dialog_id: string | null) =>  `${dialogs}/${dialog_id}${messages}/`,
    deleteMessagesByDialog: (dialog_id: string | null, messages_id: string) =>  `${dialogs}/${dialog_id}${messages}/${messages_id}/`,
  },
}
