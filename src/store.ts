import { ContentActionType } from './reducers/contentReducer'
import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore
} from 'redux'

import thunk from 'redux-thunk'
import authReducer, { AuthActionType } from './reducers/authReducer'
import contentReducer from './reducers/contentReducer'
import commonReducer, { CommonActionType } from './reducers/commonReducer'
import usersReducer, { UsersActionType } from './reducers/usersReducer'
import profilePageReducer, {
	ProfileActionType
} from './reducers/profileReducer'

const rootReducer = combineReducers({
	content: contentReducer,
	profile: profilePageReducer,
	auth: authReducer,
	common: commonReducer,
	users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type ReduxRootStateType = ReturnType<typeof rootReducer>

export type ThunkDispatchType =
	| ContentActionType
	| AuthActionType
	| CommonActionType
	| UsersActionType
	| ProfileActionType

// @ts-ignore
window.store = store
