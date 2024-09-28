import {setStatusProfileApi} from "../api/apiProfile";

export const auth = "/auth";
export const profile = "/profile";
export const users = "/users";


export const mainUrls = {
  id: ":id",
  notFound: "*",
  auth: {
    me: `${auth}/me`,
    signup: `${auth}/signup`,
    signin: `${auth}/signin`,
  },
  profile: {
    profile: `${profile}/`,
    edit: `${profile}/edit`,
    delete: `${profile}/delete`,
    setPhoto: `${profile}/edit/photo`,
    setStatus: `${profile}/edit/status`,
  },
  users: {
    users: (page: number) => `${users}/?page=${page}`,
    userById: (user_id: string) => `${users}/${user_id}`,
    followers: (page: number) => `${users}/followers?page=${page}`,
    following: (page: number) => `${users}/following?page=${page}`,
    follow: (user_id: string) => `${users}/follow/${user_id}`,
    unfollow: (user_id: string) => `${users}/unfollow/${user_id}`,
  },
}
