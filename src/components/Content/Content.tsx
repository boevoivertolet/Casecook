import { PostDataType } from '../../reducers/postReducer'
import s from './Content.module.css'
import { AuthUserType } from '../../reducers/authReducer'
import { Profile } from '../Profile/Profile'
import { UserProfileType } from '../../reducers/profileReducer'

const Content = (props: ContentPropsType) => {
	return (
		<div className={s.contentContainer}>
			<Profile {...props} userProfile={props.userProfile} />
		</div>
	)
}

type ContentPropsType = {
	postData: PostDataType[]
	newPostText: string
	authUser: AuthUserType
	userProfile: UserProfileType | null
	status: string
	updateTextarea: (text: string) => void
	addPost: (message: string) => void
	deletePost: (postId: number) => void
	getUserProfile: (userId: number) => void
	getStatusProfile: (userId: number) => void
	updateStatusProfile: (mess: string) => void
}

export default Content
