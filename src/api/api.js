import axios from "axios";

const commonAxiosInstance = axios.create({
  // withCredentials: true,
  baseURL: "https://660d6d866ddfa2943b3462c7.mockapi.io/",
  // headers: {
  //   "API-KEY": "2606b888-8484-4e56-ac3e-483848e15f9a",
  // },
});

export const getUsers = async () => {
  const response = await commonAxiosInstance.get("contacts");
  return response.data;
};
