import { ChangeEvent } from 'react'
import s from '../components/Content/Content.module.css'

export const UniversalButton = (props: UniversalButtonPropsType) => {
	return (
		<button className={s.universalButton} onClick={props.onClick}>
			{props.title}
		</button>
	)
}

type UniversalButtonPropsType = {
	title: string
	onClick: () => void
}
