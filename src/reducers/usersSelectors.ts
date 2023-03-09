import { ReduxRootStateType } from '../store'

export const getUsers = (state: ReduxRootStateType) => {
	return state.users
}
export const getPageSize = (state: ReduxRootStateType) => {
	return state.users.pageSize
}
export const getTotalCount = (state: ReduxRootStateType) => {
	return state.users.totalCount
}
export const getCurrentPage = (state: ReduxRootStateType) => {
	return state.users.currentPage
}
export const getIsFetching = (state: ReduxRootStateType) => {
	return state.app.isFetching
}
