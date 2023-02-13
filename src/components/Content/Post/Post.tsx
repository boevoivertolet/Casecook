import { PostDataType } from '../../../reducers/profileReducer'
import s from '../Content.module.css'

export const Post = (props: PostType) => {
	return (
		<div className={s.posts}>
			<div className={s.postUserBlock}>
				<div className={s.postUser}>
					<img
						className={s.userAva}
						src={props.postData.userAva}
						alt='#'
					/>
				</div>
				<div className={s.postUserName}>{props.postData.userName}</div>
			</div>
			<div className={s.postBody}>{props.postData.message}</div>
		</div>
	)
}

type PostType = {
	postData: PostDataType
}
