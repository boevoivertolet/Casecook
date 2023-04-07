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
import LoginContainer from './components/Login/LoginContainer'
import GreetingsContainer from './components/Greetings/GreetingsContainer'
import { ReduxRootStateType } from './store'
import { Component } from 'react'
import { initializeApp } from './reducers/appReducer'
import { connect } from 'react-redux'


class App extends Component<AppType> {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {

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
						<Route path={`/profile`}>
							<Route index element={<ContentContainer />} />
							<Route path=':userId' element={<ContentContainer />} />
						</Route>
						<Route path='/my-profile' element={<ContentContainer />} />

						<Route path='/news' element={<NewsContainer />} />

						<Route path='/messenger' element={<MessengerContainer />} />

						<Route path='/music' element={<MusicContainer />} />

						<Route path='/friends' element={<FriendsContainer />} />

						<Route path='/settings' element={<SettingsContainer />} />

						<Route path='/login' element={<LoginContainer />} />
						<Route path='/casecook' element={<GreetingsContainer />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: ReduxRootStateType): AppMapStateToPropsType => {
	return {
		initialized: state.app.initialized
	}
}
type AppMapStateToPropsType = {
	initialized: boolean
}
type AppMapDispatchToPropsType = {
	initializeApp: () => void
}
type AppType = AppMapDispatchToPropsType & AppMapStateToPropsType

export default connect(mapStateToProps, { initializeApp })(App)
