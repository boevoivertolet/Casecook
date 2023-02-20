import { UsersItemsType } from '../../reducers/usersReducer'
import s from './User.module.css'
import userPhoto from '../../assets/userphoto/user.jpeg'
import { UniversalButton } from '../../common/UniversalButton'
import { NavLink } from 'react-router-dom'
export const User = (props: UserPropsType) => {
	function followUnfollow() {
		if (props.user.followed) {
			props.unFollow(props.user.id)
		} else {
			props.follow(props.user.id)
		}
	}

	return (
		<div className={s.userBlock}>
			<div className={s.imgBlock}>
				<NavLink to={`/profile/${props.user.id}`}>
					<img
						className={s.img}
						src={
							props.user.photos.large
								? props.user.photos.large
								: userPhoto
						}
						alt='#'
					/>
				</NavLink>
			</div>
			<div className={s.statusName}>
				<div className={s.userName}>{props.user.name}</div>
				<div>{props.user.status}</div>
				<UniversalButton
					disabled={props.isFetching}
					title={props.user.followed ? 'unfollow' : 'follow'}
					onClick={followUnfollow}
				/>
			</div>
		</div>
	)
}
type UserPropsType = {
	user: UsersItemsType
	isFetching: boolean
	follow: (userId: string) => void
	unFollow: (userId: string) => void
	setCurrentPage: (currentPage: number) => void
	setIsFollowingProgress: (isFetching: boolean, userId: string) => void
	getUsers: (currentPage: number, pageSize: number) => void
}
