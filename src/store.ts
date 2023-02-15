import { ProfileActionType } from './reducers/profileReducer'
import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore
} from 'redux'

import thunk from 'redux-thunk'
import authReducer, { AuthActionType } from './reducers/authReducer'
import profileReducer from './reducers/profileReducer'
import commonReducer, { CommonActionType } from './reducers/commonReducer'

const rootReducer = combineReducers({
	profile: profileReducer,
	auth: authReducer,
	common: commonReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type ReduxRootStateType = ReturnType<typeof rootReducer>

export type ThunkDispatchType =
	| ProfileActionType
	| AuthActionType
	| CommonActionType

// @ts-ignore
window.store = store
