import { ChangeEvent } from 'react'
import s from '../components/Content/Content.module.css'

export const UniversalTextarea = (props: UniversalTextareaPropsType) => {
	return (
		<textarea
			className={s.textarea}
			placeholder={props.placeholder}
			value={props.text}
			onChange={props.onChange}></textarea>
	)
}

type UniversalTextareaPropsType = {
	placeholder: string
	text: string
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
