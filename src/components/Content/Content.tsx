import { UniversalTextarea } from '../../common/UniversalTextarea'
import { PostDataType } from '../../reducers/profileReducer'
import s from './Content.module.css'
import { ChangeEvent } from 'react'
import { Post } from './Post/Post'
import { UniversalButton } from '../../common/UniversalButton'

const Content = (props: ContentPropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.updateTextarea(e.currentTarget.value)
	}
	const addPost = () => {
		props.addPost(props.newPostText)
	}

	let posts = props.postsData.map((p) => <Post key={p.postId} postData={p} />)

	return (
		<div className={s.contentContainer}>
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
							src='https://resizing.flixster.com/U7jLXZqIWp875Z4soUg1704DT78=/300x300/v2/https://flxt.tmsimg.com/assets/p13001485_i_h9_aa.jpg'
							alt='#'
						/>
						<div className={s.nameDescription}>
							<h2>Gordon Ramsey</h2>
							<div>Status</div>
							<div>Можно добавить пост</div>
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

type ContentPropsType = {
	newPostText: string
	postsData: PostDataType[]
	updateTextarea: (text: string) => void
	addPost: (message: string) => void
}

export default Content
