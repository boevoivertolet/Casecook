import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
export const Sidebar = () => {
	return (
		<div className={s.sidebar}>
			<div className={s.sidebarLinks}>
				<div className={s.sidebarNav}>
					<NavLink to={`/my-profile`}>My profile</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/news'>News</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/messenger'>Messenger</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/friends'>Friends</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/music'>Music</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/settings'>Settings</NavLink>
				</div>
			</div>
		</div>
	)
}
