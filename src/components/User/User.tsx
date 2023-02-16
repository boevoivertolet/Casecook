import { UsersItemsType } from '../../reducers/usersReducer'
import s from './User.module.css'
import userPhoto from '../../assets/userphoto/user.jpeg'
import { UniversalButton } from '../../common/UniversalButton'
export const User = (props: UserPropsType) => {
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
					onClick={() => {
						alert('followed')
					}}
				/>
			</div>
		</div>
	)
}
type UserPropsType = {
	user: UsersItemsType
}
