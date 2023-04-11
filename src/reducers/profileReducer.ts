import { Dispatch } from 'redux'
import { setIsFetchingAC } from './appReducer'
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
		case 'samurai-network/profile/SET-USER-PROFILE':
			return {
				...state,
				userProfile: action.userProfile
			}
		case 'samurai-network/profile/SET-STATUS':
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
	({ type: 'samurai-network/profile/SET-USER-PROFILE', userProfile } as const) //Action Create
const setStatusProfile = (status: string) =>
	({ type: 'samurai-network/profile/SET-STATUS', status } as const) //Action Create

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
		}
	})
}
export const updateStatusProfile = (status: string) => (dispatch: Dispatch) => {
	dispatch(setIsFetchingAC(true))

	profileAPI.updateStatus(status).then((res) => {
		dispatch(setIsFetchingAC(false))

		if (res.resultCode === 0) {
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
