import { Dispatch } from 'redux'
import { usersAPI } from '../api/api'
import { setIsFetchingAC } from './appReducer'

let initialState: InitialUsersStateType = {
	items: [],
	totalCount: 100,
	error: null,
	pageSize: 100,
	currentPage: 1,
	followingInProgress: []
}

const usersReducer = (
	state: InitialUsersStateType = initialState,
	action: UsersActionType
): InitialUsersStateType => {
	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				items: state.items.map((u) =>
					u.id === action.userId ? { ...u, followed: true } : u
				)
			}
		case 'UNFOLLOW':
			return {
				...state,
				items: state.items.map((u) =>
					u.id === action.userId ? { ...u, followed: false } : u
				)
			}
		case 'SET-USERS':
			return {
				...state,
				items: [...action.items]
			}
		case 'SET-CURRENT-PAGE':
			return {
				...state,
				currentPage: action.currentPage
			}
		case 'SET-USERS-TOTAL-COUNT':
			return {
				...state,
				totalCount: action.totalCount
			}
		case 'SET-IS-FOLLOWING-PROGRESS':
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId)
			}

		default:
			return state
	}
}

//Action Creators
export const acceptFollow = (userId: string) =>
	({ type: 'FOLLOW', userId } as const) //Action Create
export const acceptUnfollow = (userId: string) =>
	({ type: 'UNFOLLOW', userId } as const) //Action Create
export const setUsers = (items: UsersItemsType[]) =>
	({ type: 'SET-USERS', items } as const) //Action Create
export const setCurrentPage = (currentPage: number) =>
	({ type: 'SET-CURRENT-PAGE', currentPage } as const) //Action Create
export const setTotalUsersCount = (totalCount: number) =>
	({ type: 'SET-USERS-TOTAL-COUNT', totalCount } as const) //Action Create
export const setIsFollowingProgress = (isFetching: boolean, userId: string) =>
	({
		type: 'SET-IS-FOLLOWING-PROGRESS',
		isFetching,
		userId
	} as const) //Action Create

//Thunk Creator

export const getUsers = (page: number, pageSize: number) => {
	return (dispatch: Dispatch) => {
		dispatch(setIsFetchingAC(true))
		usersAPI.getUsers(page, pageSize).then((data) => {
			dispatch(setIsFetchingAC(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
}
export const follow = (userId: string) => {
	return (dispatch: Dispatch) => {
		dispatch(setIsFetchingAC(true))
		usersAPI.postFollow(userId).then((data) => {
			if (data.resultCode === 0) {
				dispatch(acceptFollow(userId))
			}
			dispatch(setIsFetchingAC(false))
		})
	}
}
export const unFollow = (userId: string) => {
	return (dispatch: Dispatch) => {
		dispatch(setIsFetchingAC(true))
		usersAPI.deleteFollow(userId).then((data) => {
			if (data.resultCode === 0) {
				dispatch(acceptUnfollow(userId))
			}
			dispatch(setIsFetchingAC(false))
		})
	}
}
//Types

export type InitialUsersStateType = {
	items: Array<UsersItemsType>
	totalCount: number
	error: string | null
	pageSize: number
	currentPage: number
	followingInProgress: Array<string>
}

export type UsersItemsType = {
	uniqueUrlName: null
	id: string
	followed: boolean
	name: string
	status: string
	photos: PhotosType
}
type PhotosType = {
	small: string | undefined
	large: string | undefined
}

export type UsersActionType =
	| ReturnType<typeof acceptFollow>
	| ReturnType<typeof acceptUnfollow>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof setIsFollowingProgress>

export default usersReducer
