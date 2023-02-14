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
					<Route
						path='/casecook/my-profile'
						element={<ContentContainer />}
					/>

					<Route path='/casecook/news' element={<NewsContainer />} />

					<Route
						path='/casecook/messenger'
						element={<MessengerContainer />}
					/>

					<Route path='/casecook/music' element={<MusicContainer />} />

					<Route path='/casecook/friends' element={<FriendsContainer />} />

					<Route
						path='/casecook/settings'
						element={<SettingsContainer />}
					/>
				</Routes>
			</div>
		</div>
	)
}
