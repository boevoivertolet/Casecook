import s from '../components/Content/Content.module.css'
import { AddPostFormDataType, AddPostFormRedux } from './AddPostForm'

export const TextareaButton = (props: TextareaButtonPropsType) => {
	const addPost = (mess: AddPostFormDataType) => {
		props.addPost(mess.newPostBody)
	}

	return (
		<div className={s.textAreaButtonBlock}>
			<AddPostFormRedux onSubmit={addPost} />
		</div>
	)
}

type TextareaButtonPropsType = {
	addPost: (message: string) => void
}
