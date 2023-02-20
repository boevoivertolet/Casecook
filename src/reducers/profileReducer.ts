import { Dispatch } from 'redux'
import { setIsFetchingAC } from './commonReducer'
import { profileAPI } from '../api/api'

let initialState: InitialProfileType = {
	userProfile: null,
	status: ''
}

const profilePageReducer = (
	state: InitialProfileType = initialState,
	action: ProfileActionType
): InitialProfileType => {
	switch (action.type) {
		case 'SET-USER-PROFILE':
			return {
				...state,
				userProfile: action.userProfile
			}
		case 'SET-STATUS':
			return {
				...state,
				status: action.status
			}
		default:
			return state
	}
}
// Action Creators

const setUserProfile = (userProfile: UserProfileType) =>
	({ type: 'SET-USER-PROFILE', userProfile } as const) //Action Create
const setStatusProfile = (status: string) =>
	({ type: 'SET-STATUS', status } as const) //Action Create

// Thunk Creators

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
	dispatch(setIsFetchingAC(true))
	profileAPI.getProfile(userId).then((data) => {
		dispatch(setIsFetchingAC(false))
		dispatch(setUserProfile(data))
	})
}
export const getStatusProfile = (userId: number) => (dispatch: Dispatch) => {
	dispatch(setIsFetchingAC(true))
	profileAPI.getStatus(userId).then((status) => {
		console.log(status)
		dispatch(setIsFetchingAC(false))
		if (status === null) {
			dispatch(setStatusProfile(';)'))
		} else {
			dispatch(setStatusProfile(status))
		}
	})
}
export const updateStatusProfile = (status: string) => (dispatch: Dispatch) => {
	console.log('Thunk:', status)
	dispatch(setIsFetchingAC(true))
	profileAPI.updateStatus(status).then((res) => {
		dispatch(setIsFetchingAC(false))
		console.log('action:', status)
		if (res.data.resultCode === 0) {
			dispatch(setStatusProfile(status))
		}
	})
}
type InitialProfileType = {
	userProfile: UserProfileType | null
	status: string
}
export type UserProfileType = {
	aboutMe: string
	contacts: {
		facebook: string
		website: string | null
		vk: string
		twitter: string
		instagram: string
		youtube: string | null
		github: string
		mainLink: null
	}
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	photos: {
		small: string
		large: string
	}
}
export type ProfileActionType =
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof setStatusProfile>

export default profilePageReducer
