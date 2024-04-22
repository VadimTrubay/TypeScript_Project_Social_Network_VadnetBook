import { v1 } from 'uuid'
import { profileAPI } from '../api/api'
import { ProfileInfoReduxFormDataType } from '../components/Content/Profile/About/ProfileInfoForm'
import { AppDispatchType, AppStateType } from './store'

//constants
const ADD_NEW_POST = 'PROFILE/ADD_NEW_POST'
const SET_PROFILE = 'PROFILE/SET_PROFILE'
const SET_PROFILE_STATUS = 'PROFILE/SET_PROFILE_STATUS'
const UPDATE_PROFILE_PHOTOS = 'PROFILE/UPDATE_PROFILE_PHOTOS'

const initialState:ProfilePageType = {
    profile: {
        aboutMe: '',
        contacts: {facebook: '', website: '', vk: '', twitter: '', instagram: '', youtube: '', github: '', mainLink: ''},
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {small: '', large: ''}
    },
    postsData: [] as Array<PostType>,
    status: ''
}

//reducer
export function profileReducer(state:ProfilePageType = initialState, action:ProfileActionsType):ProfilePageType {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost:PostType = {id: v1(), message: action.newPostText, likes: 0, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'}
            return {...state, postsData: [newPost, ...state.postsData]}
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state, status: action.status}
        case UPDATE_PROFILE_PHOTOS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

//AC
export const addNewPostAC = (newPostText:string) => ({type: ADD_NEW_POST, newPostText} as const)
export const setProfileAC = (profile:ProfileType) => ({type: SET_PROFILE, profile} as const)
export const setProfileStatusAC = (status: string) => ({type: SET_PROFILE_STATUS, status} as const)
export const updatePhotoAC = (photos: PhotosType) => ({type: UPDATE_PROFILE_PHOTOS, photos} as const)

//TC
export const getProfileTC = (userID: number) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.getProfile(userID)
    dispatch(setProfileAC(res))
}
export const getProfileStatusTC = (userID: number) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.getProfileStatus(userID)
    dispatch(setProfileStatusAC(res.data))
}
export const updateProfileStatusTC = (status: string) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.updateProfileStatus(status)
    if(res.resultCode === 0) {dispatch(setProfileStatusAC(status))}
}
export const updatePhotoTC = (photo: any) => async (dispatch: AppDispatchType) => {
    const res = await profileAPI.updatePhoto(photo)
    if(res.resultCode === 0) {dispatch(updatePhotoAC(res.data.photos))}
}
export const updateProfileInfoTS = (profileInfoFormData: ProfileInfoReduxFormDataType) => async (dispatch: AppDispatchType, getState: () => AppStateType) => {
    const profile = getState().profilePage.profile
    const profileData = {
        ...profile,
        fullName: profileInfoFormData.fullName,
        aboutMe: profileInfoFormData.aboutMe,
        lookingForAJob: profileInfoFormData.lookingForAJob.toLowerCase() === 'yes' ? true : false,
        lookingForAJobDescription: profileInfoFormData.lookingForAJobDescription,
        contacts: {...profile.contacts, website: profileInfoFormData.contacts}
    }
    const res = await profileAPI.updateProfileInfo(profileData)
    if(res.resultCode === 0) {
        dispatch(getProfileTC(profileData.userId))
    }
}

//types
export type ProfileType = {
    aboutMe: string
    contacts: {facebook: string, website: string, vk: string, twitter: string, instagram: string, youtube: string, github: string, mainLink: string}
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type PhotosType = {small: string, large: string}
export type PostType = {id: string, message: string, likes: number, ava: string}
export type ProfilePageType = {profile: ProfileType, postsData: Array<PostType>, status: string}

export type AddNewPostActionType = ReturnType<typeof addNewPostAC>
export type SetProfileActionType = ReturnType<typeof setProfileAC>
export type SetProfileStatusActionType = ReturnType<typeof setProfileStatusAC>
export type UpdatePhotoACActionType = ReturnType<typeof updatePhotoAC>
export type ProfileActionsType = AddNewPostActionType | SetProfileActionType | SetProfileStatusActionType | UpdatePhotoACActionType