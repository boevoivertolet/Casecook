import { Dispatch } from 'redux'
import { ThunkDispatchType } from '../store'
import { setIsFetchingAC } from './appReducer'

let initialState: InitialPostStateType = {
	postData: [],
	newPostText: ''
}

const postReducer = (
	state: InitialPostStateType = initialState,
	action: ContentActionType
): InitialPostStateType => {
	switch (action.type) {
		case 'samurai-network/post/ADD-POST':
			let newPost = {
				postId: Date.now(),
				message: action.message
			}

			return {
				...state,
				postData: [newPost, ...state.postData],
				newPostText: ''
			}
		case 'samurai-network/post/UPDATE-TEXTAREA':
			return { ...state, newPostText: action.newPostText }
		case 'samurai-network/post/DELETE-POST':
			return {
				...state,
				postData: state.postData.filter((el) => el.postId !== action.postId)
			}

		default:
			return { ...state }
	}
}
// Actions
const updateTextareaAC = (newPostText: string) =>
	({ type: 'samurai-network/post/UPDATE-TEXTAREA', newPostText } as const)

export const addPostAC = (message: string) =>
	({ type: 'samurai-network/post/ADD-POST', message } as const)
export const deletePostAC = (postId: number) => {
	return { type: 'samurai-network/post/DELETE-POST', postId } as const
}

//Thunks
export const updateTextarea =
	(newPostText: string) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(updateTextareaAC(newPostText))
	}
export const addPost =
	(message: string) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(setIsFetchingAC(true))
		dispatch(addPostAC(message))
		dispatch(setIsFetchingAC(false))
	}
export const deletePost =
	(postId: number) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(setIsFetchingAC(true))
		dispatch(deletePostAC(postId))
		dispatch(setIsFetchingAC(false))
	}

export type InitialPostStateType = {
	postData: PostDataType[]
	newPostText: string
}

export type PostDataType = {
	postId: number
	message: string
}

type UpdateTextareaACType = ReturnType<typeof updateTextareaAC>
type AddPostACType = ReturnType<typeof addPostAC>
type DeletePostACType = ReturnType<typeof deletePostAC>
export type ContentActionType =
	| UpdateTextareaACType
	| AddPostACType
	| DeletePostACType

export default postReducer
