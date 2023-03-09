import { ContentActionType } from './reducers/postReducer'
import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore
} from 'redux'

import thunk from 'redux-thunk'
import authReducer, { AuthActionType } from './reducers/authReducer'
import postReducer from './reducers/postReducer'
import appReducer, { AppActionType } from './reducers/appReducer'
import usersReducer, { UsersActionType } from './reducers/usersReducer'
import profilePageReducer, {
	ProfileActionType
} from './reducers/profileReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	post: postReducer,
	profile: profilePageReducer,
	auth: authReducer,
	app: appReducer,
	users: usersReducer,
	form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type ReduxRootStateType = ReturnType<typeof rootReducer>

export type ThunkDispatchType =
	| ContentActionType
	| AuthActionType
	| AppActionType
	| UsersActionType
	| ProfileActionType

// @ts-ignore
window.store = store
