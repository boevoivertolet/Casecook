import { useState } from 'react'
import { UniversalButton } from '../../common/UniversalButton'
import { InitialUsersStateType } from '../../reducers/usersReducer'
import { User } from '../User/User'
import s from './Friends.module.css'
export const Friends = (props: FriendsPropsType) => {
	const [mode, setMode] = useState<boolean>(true)

	let users = props.users.items.map((u) => <User key={u.id} user={u} />) // User

	function changeViewMode() {
		setMode(!mode)
	}
	return (
		<div className={s.friendsContainer}>
			<UniversalButton
				onClick={changeViewMode}
				title={mode ? 'All users' : 'Friends'}
			/>

			{mode ? (
				<div className={s.friends}>Followed Users</div>
			) : (
				<div className={s.findFriends}>{users}</div>
			)}
		</div>
	)
}
type FriendsPropsType = {
	users: InitialUsersStateType
}
