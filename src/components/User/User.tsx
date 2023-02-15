import { UsersItemsType } from '../../reducers/usersReducer'
import s from './User.module.css'
export const User = (props: UserPropsType) => {
	return (
		<div className={s.userBlock}>
			<div className={s.imgBlock}>
				<img
					className={s.img}
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS_dK1q17l-Oubnn1l3D6PJKljC7TPrB4rXQjUV7_h8qCg3Voifas3eGGxoldIweEC2E&usqp=CAU'
					alt='#'
				/>
			</div>
			<div className={s.statusName}>
				<div>{props.user.photos.large}</div>
				<div>{props.user.status}</div>
			</div>
		</div>
	)
}
type UserPropsType = {
	user: UsersItemsType
}
