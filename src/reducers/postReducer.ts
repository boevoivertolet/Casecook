import { Dispatch } from 'redux'
import { ThunkDispatchType } from '../store'

let initialState: InitialContentStateType = {
	postData: [],
	newPostText: ''
}

const postReducer = (
	state: InitialContentStateType = initialState,
	action: ContentActionType
): InitialContentStateType => {
	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				postId: Date.now(),
				message: action.message
			}

			return {
				...state,
				postData: [newPost, ...state.postData],
				newPostText: ''
			}
		case 'UPDATE-TEXTAREA':
			return { ...state, newPostText: action.newPostText }
		case 'DELETE-POST':
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
	({ type: 'UPDATE-TEXTAREA', newPostText } as const)

const addPostAC = (message: string) => ({ type: 'ADD-POST', message } as const)
const deletePostAC = (postId: number) => {
	return { type: 'DELETE-POST', postId } as const
}

//Thunks
export const updateTextarea =
	(newPostText: string) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(updateTextareaAC(newPostText))
	}
export const addPost =
	(message: string) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(addPostAC(message))
	}
export const deletePost =
	(postId: number) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(deletePostAC(postId))
	}

type InitialContentStateType = {
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
