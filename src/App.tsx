import s from './App.module.css'

import ContentContainer from './components/Content/ContentContainer'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

export const App = () => {
	return (
		<div className={s.app}>
			<div className={s.header}>
				<Header />
			</div>
			<div className={s.sidebar}>
				<Sidebar />
			</div>
			<div className={s.content}>
				<ContentContainer />
			</div>
		</div>
	)
}
