import { Post } from './Post'
import s from '../Content.module.css'
import { PostDataType } from '../../../reducers/postReducer'
import { UserProfileType } from '../../../reducers/profileReducer'

export const PostsBody = (props: PostsBodyPropsType) => {
	let posts = props.postData.map((p) => (
		<Post
			key={p.postId}
			userProfile={props.userProfile}
			postData={p}
			deletePost={props.deletePost}
		/>
	))
	return <div className={s.postsContainer}>{posts}</div>
}

type PostsBodyPropsType = {
	postData: PostDataType[]
	userProfile: UserProfileType | null
	deletePost: (postId: number) => void
}
