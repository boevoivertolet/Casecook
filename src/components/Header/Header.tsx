import { NavLink } from 'react-router-dom'
import { UserType } from '../../reducers/authReducer'
import s from './Header.module.css'
export const Header = (props: HeaderPropsType) => {
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
			<div className={s.time}>{'time'}</div>
			<div className={s.loginName}>
				{props.user.login ? (
					props.user.login
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</div>
	)
}

type HeaderPropsType = {
	user: UserType
}
