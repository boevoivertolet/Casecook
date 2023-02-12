import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore
} from 'redux'
import profileReducer, { ProfileActionType } from './reducers/profileReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	profile: profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type ReduxRootStateType = ReturnType<typeof rootReducer>

export type ThunkDispatchType = ProfileActionType

// @ts-ignore
window.store = store
