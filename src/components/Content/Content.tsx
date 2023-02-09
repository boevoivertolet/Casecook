import s from './Content.module.css'
export const Content = () => {
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
							<div>Description</div>
						</div>
					</div>
				</div>
			</div>
			<div className={s.postsFriendsContainer}>
				<div className={s.postsContainer}>
					<textarea
						className={s.textarea}
						placeholder="What's new ?"></textarea>
					<div className={s.posts}>
						<div className={s.postBody}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur suscipit hic placeat nostrum natus enim.
						</div>
					</div>
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
