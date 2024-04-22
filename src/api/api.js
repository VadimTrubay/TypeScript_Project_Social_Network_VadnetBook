import axios from "axios";
import { selectApiKey } from "../redux/auth/selectors";

const API_KEY = selectApiKey;
// create default instance for axios
const axiosCustomInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": API_KEY,
  },
});

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10, onlyFriends = null) {
    return axiosCustomInstance
      .get(`users?page=${currentPage}&count=${pageSize}&friend=${onlyFriends}`)
      .then((res) => res.data);
  },

  followUser(userId) {
    return axiosCustomInstance
      .post(`follow/${userId}`)
      .then((res) => res.data.resultCode); // return only result code
  },

  unfollowUser(userId) {
    return axiosCustomInstance
      .delete(`follow/${userId}`)
      .then((res) => res.data.resultCode); // return only result code
  },
};
