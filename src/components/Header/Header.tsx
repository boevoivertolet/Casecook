import userPhoto from '../../assets/userphoto/user.jpeg'
import logo from '../../assets/logo/logo.png'

import { NavLink } from 'react-router-dom'
import { Clock } from '../../features/Clock/Clock'

import { AuthUserType } from '../../reducers/authReducer'
import s from './Header.module.css'
export const Header = (props: HeaderPropsType) => {
	return (
		<div className={s.header}>
			<div className={s.logoBlock}>
				<img className={s.logo} src={logo} alt='logo' />
				<span>Casecook</span>
			</div>
			<div className={s.time}>
				<Clock />
			</div>
			<div className={s.loginName}>
				<img src={userPhoto} alt='#' />
				{props.authUser.login ? (
					props.authUser.login
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</div>
	)
}

type HeaderPropsType = {
	authUser: AuthUserType
}
