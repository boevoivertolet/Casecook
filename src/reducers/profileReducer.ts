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
		dispatch(setIsFetchingAC(false))
		if (status === null) {
			dispatch(setStatusProfile('no status'))
		} else {
			dispatch(setStatusProfile(status))
			console.log(status)
		}
	})
}
export const updateStatusProfile = (status: string) => (dispatch: Dispatch) => {
	console.log('начало санки :', status)
	dispatch(setIsFetchingAC(true))
	console.log('крутилка вкл.')
	profileAPI.updateStatus(status).then((res) => {
		dispatch(setIsFetchingAC(false))
		console.log('крутилка выкл.')
		if (res.resultCode === 0) {
			dispatch(setStatusProfile(status))
			console.log('конец санки :', status)
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
	userId: number
	photos: {
		small: string
		large: string
	}
}
export type ProfileActionType =
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof setStatusProfile>

export default profilePageReducer
