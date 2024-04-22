import axios from 'axios';
import { ProfileType } from '../store/profile-reducer';

export const commonAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2606b888-8484-4e56-ac3e-483848e15f9a' 
    }
})

export const authAPI = {
    getAuthUser() {
        return commonAxiosInstance.get(`auth/me`).then(res => res.data)
    },
    login(email:string, password:string, rememberMe = false) {
        return commonAxiosInstance.post(`auth/login`, {email, password, rememberMe}).then(res => res.data)
    },
    logout() {
        return commonAxiosInstance.delete(`auth/login`).then(res => res.data)
    },
}

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return commonAxiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    createFollow(id: string) {
        return commonAxiosInstance.post(`follow/${id}`, {}).then(res => res.data)
    },
    deleteFollow(id: string) {
        return commonAxiosInstance.delete(`follow/${id}`).then(res => res.data)
    },
}

export const profileAPI = {
    getProfile(id:number) {
        return commonAxiosInstance.get(`profile/${id}`).then(res => res.data)
    },
    getProfileStatus(id:number) {
        return commonAxiosInstance.get(`profile/status/${id}`).then(res => res)
    },
    updateProfileStatus(status:string) {
        return commonAxiosInstance.put('profile/status', {status}).then(res => res.data)
    },
    updatePhoto(photo:any) {
        const formData = new FormData()
        formData.append("image", photo)
        return commonAxiosInstance.put('profile/photo', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfileInfo(profileData:ProfileType) {
        return commonAxiosInstance.put('profile/', profileData).then(res => res.data)
    },
}