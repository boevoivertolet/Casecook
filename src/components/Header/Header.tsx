import userPhoto from '../../assets/userphoto/user.jpeg'
import logo from '../../assets/logo/logo.png'
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
				<button className={s.logout} onClick={props.logout}>
					logout
				</button>
				<img src={userPhoto} alt='#' />
				{props.authUser.login}
			</div>
		</div>
	)
}

type HeaderPropsType = {
	authUser: AuthUserType
	logout: () => void
}
