import s from '../components/Content/Content.module.css'

export const UniversalButton: React.FC<UniversalButtonPropsType> = ({
	title,
	onClick,
	disabled,
	type,
	...restProps
}) => {
	return (
		<button
			className={s.universalButton}
			type={type}
			disabled={disabled}
			onClick={onClick}>
			{title}
		</button>
	)
}

type UniversalButtonPropsType = {
	title: string
	onClick?: () => void
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset' | undefined
}
