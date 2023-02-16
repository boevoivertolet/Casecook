import { Dispatch } from 'react'
import { ThunkDispatchType } from '../store'

let initialState: InitialCommonStateType = {
	isFetching: false
}

const commonReducer = (
	state: InitialCommonStateType = initialState,
	action: CommonActionType
): InitialCommonStateType => {
	switch (action.type) {
		case 'SET-IS-FETCHING':
			return {
				...state,
				isFetching: action.isFetching
			}
		default:
			return state
	}
}
// Action Creators

export const setIsFetchingAC = (isFetching: boolean) =>
	({ type: 'SET-IS-FETCHING', isFetching } as const) //Action Create

//Types

type InitialCommonStateType = {
	isFetching: boolean
}

type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export type CommonActionType = SetIsFetchingACType
export default commonReducer
