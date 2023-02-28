import { UserProfileType } from '../../reducers/profileReducer'
import s from '../Content/Content.module.css'
import userPhoto from '../../assets/userphoto/user.jpeg'
import wall from '../../assets/wall/wall.jpg'

import { ProfileStatus } from './ProfileStatus'
export const ProfileInfo = (props: ProfileInfoType) => {
	return (
		<div className={s.profileInfo}>
			<img className={s.wallPaper} src={wall} alt='wall' />
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
						<ProfileStatus
							status={props.status}
							updateStatusProfile={props.updateStatusProfile}
						/>
						<div>
							{props.userProfile?.lookingForAJob
								? 'looking For A Job'
								: ' employed'}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
type ProfileInfoType = {
	userProfile: UserProfileType | null
	status: string
	updateStatusProfile: (mess: string) => void
}
