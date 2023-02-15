import { Dispatch } from 'redux'
import { ThunkDispatchType } from '../store'

let initialState: InitialProfileStateType = {
	postData: [],
	newPostText: ''
}

const profileReducer = (
	state: InitialProfileStateType = initialState,
	action: ProfileActionType
): InitialProfileStateType => {
	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				postId: Date.now(),
				message: action.message,
				userAva:
					'https://resizing.flixster.com/U7jLXZqIWp875Z4soUg1704DT78=/300x300/v2/https://flxt.tmsimg.com/assets/p13001485_i_h9_aa.jpg',
				userName: 'Gordon Ramsey'
			}
			console.log(newPost)

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

//ActionsTypes

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
		console.log(postId)
		dispatch(deletePostAC(postId))
	}

type InitialProfileStateType = {
	postData: PostDataType[]
	newPostText: string
}

export type PostDataType = {
	postId: number
	message: string
	userAva: string
	userName: string
}

type UpdateTextareaACType = ReturnType<typeof updateTextareaAC>
type AddPostACType = ReturnType<typeof addPostAC>
type DeletePostACType = ReturnType<typeof deletePostAC>
export type ProfileActionType =
	| UpdateTextareaACType
	| AddPostACType
	| DeletePostACType

export default profileReducer
