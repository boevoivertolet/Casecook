import { UniversalButton } from '../../common/UniversalButton'
import { UniversalTextarea } from '../../common/UniversalTextarea'
import s from '../Content/Content.module.css'
import { ChangeEvent } from 'react'
import { Post } from '../Content/Post/Post'
import { AuthUserType } from '../../reducers/authReducer'
import { PostDataType } from '../../reducers/contentReducer'
import { UserProfileType } from '../../reducers/profileReducer'
import userPhoto from '../../assets/userphoto/user.jpeg'

export const Profile = (props: ProfilePropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.updateTextarea(e.currentTarget.value)
	}
	const addPost = () => {
		props.addPost(props.newPostText)
	}

	let posts = props.postData.map((p) => (
		<Post
			id={props.authUser.id}
			key={p.postId}
			userProfile={props.userProfile}
			postData={p}
			deletePost={props.deletePost}
		/>
	))
	return (
		<div>
			<div className={s.profileInfo}>
				<img
					className={s.wallPaper}
					src='http://rdmkuhni.ru/images/cvet-kuhni/seraya-kuhnya/kuhnya-metallik-seryy.jpg'
					alt='#'
				/>
				<div className={s.avaContainer}>
					<div className={s.ava}>
						<img
							className={s.avaImg}
							src={
								props.userProfile?.photos.large
									? props.userProfile?.photos.large
									: userPhoto
							}
							alt='#'
						/>
						<div className={s.nameDescription}>
							<h2>{props.userProfile?.fullName}</h2>
							<div>{props.status}</div>
							<div>
								{props.userProfile?.lookingForAJob
									? 'looking For A Job'
									: ' employed'}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={s.postsFriendsContainer}>
				<div className={s.postsContainer}>
					<div className={s.textAreaButtonBlock}>
						<UniversalTextarea
							onChange={onChangeHandler}
							text={props.newPostText}
							placeholder={"What's new?"}
						/>
						<UniversalButton onClick={addPost} title={'Post'} />
					</div>
					{posts}
				</div>
				<div className={s.friendsContainer}>
					<div className={s.friends}>
						<div className={s.friendsBody}>Friends Body </div>
					</div>
				</div>
			</div>
		</div>
	)
}

type ProfilePropsType = {
	id: number | null
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
