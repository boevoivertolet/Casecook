import s from './Sidebar.module.css'
export const Sidebar = () => {
	return (
		<div className={s.sidebar}>
			<div className={s.sidebarLinks}>
				<div className={s.sidebarNav}>
					<a href='#'>My profile</a>
				</div>
				<div className={s.sidebarNav}>
					<a href='#'>News</a>
				</div>
				<div className={s.sidebarNav}>
					<a href='#'>Messenger</a>
				</div>
				<div className={s.sidebarNav}>
					<a href='#'>Friends</a>
				</div>
				<div className={s.sidebarNav}>
					<a href='#'>Music</a>
				</div>
				<div className={s.sidebarNav}>
					<a href='#'>Settings</a>
				</div>
			</div>
		</div>
	)
}
