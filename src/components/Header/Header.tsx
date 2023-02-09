import s from './Header.module.css'
export const Header = () => {
	return (
		<div className={s.header}>
			<img
				className={s.logo}
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/1024px-Cc.logo.circle.svg.png'
				alt='logo'
			/>
		</div>
	)
}
