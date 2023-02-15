import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../api/api'
import { setIsFetchingAC } from './commonReducer'

let initialState: InitialAuthStateType = {
	data: {
		id: null,
		login: null,
		email: null,
		isAuth: false
	},
	messages: [],
	fieldsErrors: [],
	resultCode: 0
}

const authReducer = (
	state: InitialAuthStateType = initialState,
	action: AuthActionType
): InitialAuthStateType => {
	switch (action.type) {
		case 'SET-USER-DATA':
			return {
				...state,
				data: action.payload
			}

		default:
			return state
	}
}
// Action Creators

const setAuthUserDataAC = (
	id: number,
	email: string,
	login: string,
	isAuth: boolean
) => ({ type: 'SET-USER-DATA', payload: { id, email, login, isAuth } } as const) //Action Create

// Thunk Creators

export const getAuthUserData =
	(): ThunkAction<void, InitialAuthStateType, unknown, AuthActionType> =>
	(dispatch: Dispatch) => {
		dispatch(setIsFetchingAC(true))
		authAPI.getMe().then((response) => {
			if (response.resultCode === 0) {
				let { id, login, email } = response.data
				dispatch(setAuthUserDataAC(id, email, login, true))
				dispatch(setIsFetchingAC(false))
			}
		})
	}

// export const login =
// 	({ login, password, rememberMe }: LoginFormDataType) =>
// 	(dispatch: Dispatch) => {
// 		dispatch(setIsFetching(true))
// 		authAPI.login(login, password, rememberMe).then((res) => {
// 			if (res.resultCode === 0) {
// 				// dispatch(getAuthUserData())
// 				alert('getAuthUserData')
// 			}
// 		})
// 	}

// export const logout = () => (dispatch: Dispatch<any>) => {
// 	dispatch(setIsFetching(true))
// 	authAPI.logout().then((data) => {
// 		if (data.resultCode === 0) {
// 			dispatch(setAuthUserDataAC(null, null, null, false))
// 		}
// 	})
// }
//Types

export type AuthUserType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}
type InitialAuthStateType = {
	data: AuthUserType
	messages: Array<string>
	fieldsErrors: Array<string>
	resultCode: number
}

type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export type AuthActionType = SetAuthUserDataACType
export default authReducer
