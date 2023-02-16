import { useState } from 'react'
import { Pagination } from '../../common/Paginateion'
import { UniversalButton } from '../../common/UniversalButton'
import { InitialUsersStateType } from '../../reducers/usersReducer'
import { User } from '../User/User'
import s from './Friends.module.css'
export const Friends = (props: FriendsPropsType) => {
	const [mode, setMode] = useState<boolean>(true)

	let users = props.users.items.map((u) => (
		<User {...props} key={u.id} user={u} />
	)) // User
	let followedUsers = props.users.items.map((u) =>
		u.followed && u.photos.large ? (
			<User {...props} key={u.id} user={u} />
		) : null
	) // User

	function changeViewMode() {
		setMode(!mode)
	}
	return (
		<div className={s.friendsContainer}>
			<Pagination />
			<UniversalButton
				onClick={changeViewMode}
				title={mode ? 'All users' : 'Friends'}
			/>

			{mode ? (
				<div className={s.friends}>{followedUsers}</div>
			) : (
				<div className={s.findFriends}>{users}</div>
			)}
		</div>
	)
}
type FriendsPropsType = {
	users: InitialUsersStateType
	follow: (userId: string) => void
	unFollow: (userId: string) => void
	setCurrentPage: (currentPage: number) => void
	setIsFollowingProgress: (isFetching: boolean, userId: string) => void
	getUsers: (currentPage: number, pageSize: number) => void
}
