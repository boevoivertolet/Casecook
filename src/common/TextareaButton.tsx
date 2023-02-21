import { UniversalButton } from './UniversalButton'
import { UniversalTextarea } from './UniversalTextarea'
import s from '../components/Content/Content.module.css'
import { ChangeEvent } from 'react'

export const TextareaButton = (props: TextareaButtonPropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.updateTextarea(e.currentTarget.value)
	}
	const addPost = () => {
		props.addPost(props.newPostText)
	}

	return (
		<div className={s.textAreaButtonBlock}>
			<UniversalTextarea
				onChange={onChangeHandler}
				text={props.newPostText}
				placeholder={"What's new?"}
			/>
			<UniversalButton onClick={addPost} title={'Post'} />
		</div>
	)
}

type TextareaButtonPropsType = {
	newPostText: string
	updateTextarea: (text: string) => void
	addPost: (message: string) => void
}
