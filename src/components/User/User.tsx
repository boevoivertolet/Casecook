import { UsersItemsType } from '../../reducers/usersReducer'
import s from './User.module.css'
import userPhoto from '../../assets/userphoto/user.jpeg'
import { UniversalButton } from '../../common/UniversalButton'
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
				<img
					className={s.img}
					src={
						props.user.photos.large ? props.user.photos.large : userPhoto
					}
					alt='#'
				/>
			</div>
			<div className={s.statusName}>
				<div>{props.user.name}</div>
				<div>{props.user.status}</div>
				<UniversalButton
					title={props.user.followed ? 'unfollow' : 'follow'}
					onClick={followUnfollow}
				/>
			</div>
		</div>
	)
}
type UserPropsType = {
	user: UsersItemsType
	follow: (userId: string) => void
	unFollow: (userId: string) => void
	setCurrentPage: (currentPage: number) => void
	setIsFollowingProgress: (isFetching: boolean, userId: string) => void
	getUsers: (currentPage: number, pageSize: number) => void
}
