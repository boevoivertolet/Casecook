import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
export const Sidebar = () => {
	return (
		<div className={s.sidebar}>
			<div className={s.sidebarLinks}>
				<div className={s.sidebarNav}>
					<NavLink to='/casecook/my-profile'>My profile</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/casecook/news'>News</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/casecook/messenger'>Messenger</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/casecook/friends'>Friends</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/casecook/music'>Music</NavLink>
				</div>
				<div className={s.sidebarNav}>
					<NavLink to='/casecook/settings'>Settings</NavLink>
				</div>
			</div>
		</div>
	)
}
