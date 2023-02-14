import s from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import ContentContainer from './components/Content/ContentContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import MessengerContainer from './components/Messenger/MessengerContainer'
import NewsContainer from './components/News/NewsContainer'
import MusicContainer from './components/Music/MusicContainer'
import SettingsContainer from './components/Settings/SettingsContainer'
import FriendsContainer from './components/Friends/FriendsContainer'

export const App = () => {
	return (
		<div className={s.app}>
			<div className={s.header}>
				<HeaderContainer />
			</div>
			<div className={s.sidebar}>
				<SidebarContainer />
			</div>
			<div className={s.content}>
				<Routes>
					<Route path='/my-profile' element={<ContentContainer />} />

					<Route path='/news' element={<NewsContainer />} />

					<Route path='/messenger' element={<MessengerContainer />} />

					<Route path='/music' element={<MusicContainer />} />

					<Route path='/friends' element={<FriendsContainer />} />

					<Route path='/settings' element={<SettingsContainer />} />
				</Routes>
			</div>
		</div>
	)
}
