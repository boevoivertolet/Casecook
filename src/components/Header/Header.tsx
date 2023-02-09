import s from './Header.module.css'
export const Header = () => {
	return (
		<div className={s.header}>
			<div className={s.logoBlock}>
				<img
					className={s.logo}
					src='https://creativecommons.org/images/deed/logo-cc-heart-white.png'
					alt='logo'
				/>
				<span>Casecook</span>
			</div>
		</div>
	)
}
