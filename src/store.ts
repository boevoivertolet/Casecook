import { ProfileActionType } from './reducers/contentReducer'
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

const rootReducer = combineReducers({
	content: contentReducer,
	auth: authReducer,
	common: commonReducer,
	users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type ReduxRootStateType = ReturnType<typeof rootReducer>

export type ThunkDispatchType =
	| ProfileActionType
	| AuthActionType
	| CommonActionType
	| UsersActionType

// @ts-ignore
window.store = store
