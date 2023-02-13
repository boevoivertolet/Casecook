import { v1 } from 'uuid'
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
				postId: Number(v1()),
				message: action.message,
				userAva:
					'https://resizing.flixster.com/U7jLXZqIWp875Z4soUg1704DT78=/300x300/v2/https://flxt.tmsimg.com/assets/p13001485_i_h9_aa.jpg',
				userName: 'Gordon Ramsey'
			}
			return {
				...state,
				postData: [newPost, ...state.postData],
				newPostText: ''
			}
		case 'UPDATE-TEXTAREA':
			return { ...state, newPostText: action.newPostText }
		default:
			return { ...state }
	}
}
// Actions
const updateTextareaAC = (newPostText: string) =>
	({ type: 'UPDATE-TEXTAREA', newPostText } as const)

const addPostAC = (message: string) => ({ type: 'ADD-POST', message } as const)

//ActionsTypes
type UpdateTextareaACType = ReturnType<typeof updateTextareaAC>
type AddPostACType = ReturnType<typeof addPostAC>
export type ProfileActionType = UpdateTextareaACType | AddPostACType

//Thunks
export const updateTextarea =
	(newPostText: string) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(updateTextareaAC(newPostText))
	}
export const addPost =
	(message: string) => (dispatch: Dispatch<ThunkDispatchType>) => {
		dispatch(addPostAC(message))
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

export default profileReducer
