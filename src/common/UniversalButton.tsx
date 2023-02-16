import s from '../components/Content/Content.module.css'

export const UniversalButton = (props: UniversalButtonPropsType) => {
	return (
		<button
			className={s.universalButton}
			disabled={props.disabled}
			onClick={props.onClick}>
			{props.title}
		</button>
	)
}

type UniversalButtonPropsType = {
	title: string
	onClick: () => void
	disabled?: boolean
}
