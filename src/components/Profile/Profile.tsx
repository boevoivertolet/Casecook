import { UniversalButton } from '../../common/UniversalButton'
import { UniversalTextarea } from '../../common/UniversalTextarea'
import s from '../Content/Content.module.css'
import { ChangeEvent } from 'react'
import { Post } from '../Content/Post/Post'
import { PostDataType } from '../../reducers/postReducer'
import { UserProfileType } from '../../reducers/profileReducer'
import { ProfileInfo } from './ProfileInfo'
import { FriendsBody } from './FriendsBody'
import { TextareaButton } from '../../common/TextareaButton'
import { PostsBody } from '../Content/Post/PostsBody'

export const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo userProfile={props.userProfile} status={props.status} />
			<div className={s.postsFriendsContainer}>
				<TextareaButton
					addPost={props.addPost}
					newPostText={props.newPostText}
					updateTextarea={props.updateTextarea}
				/>
				<PostsBody
					postData={props.postData}
					userProfile={props.userProfile}
					deletePost={props.deletePost}
				/>
				<FriendsBody />
			</div>
		</div>
	)
}

type ProfilePropsType = {
	postData: PostDataType[]
	newPostText: string
	userProfile: UserProfileType | null
	status: string
	updateTextarea: (text: string) => void
	addPost: (message: string) => void
	deletePost: (postId: number) => void
	getUserProfile: (userId: number) => void
	getStatusProfile: (userId: number) => void
	updateStatusProfile: (mess: string) => void
}
