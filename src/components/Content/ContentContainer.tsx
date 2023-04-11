import React from 'react'
import { updateTextarea, addPost, deletePost } from '../../reducers/postReducer'
import { connect } from 'react-redux'
import { PostDataType } from '../../reducers/postReducer'
import { ReduxRootStateType } from '../../store'
import Content from './Content'
import { AuthUserType } from '../../reducers/authReducer'
import { compose } from 'redux'
import { withRouter } from '../../hoc/WithRouter'

import {
	getUserProfile,
	getStatusProfile,
	updateStatusProfile,
	UserProfileType
} from '../../reducers/profileReducer'
import { UsersItemsType } from '../../reducers/usersReducer'
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Preloader } from '../../common/Preloader'

class ContentContainer extends React.Component<ContentContainerType, any> {
	componentDidMount() {
		let userId = Number(this.props.router.params.userId)

		if (!userId || undefined) {
			userId = Number(this.props.authUser.id)
		}
		this.props.getUserProfile(userId)
		this.props.getStatusProfile(userId)
	}

	render() {
		
		if (!this.props.authUser.isAuth) return <Navigate to={'/login'} />
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Content
					{...this.props}
					status={this.props.status}
					updateStatusProfile={this.props.updateStatusProfile}
				/>
			</>
		)
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): ContentMapStateToPropsType => {
	return {
		users: state.users.items,
		postData: state.post.postData,
		newPostText: state.post.newPostText,
		authUser: state.auth.data,
		userProfile: state.profile.userProfile,
		status: state.profile.status,
		isFetching: state.app.isFetching
	}
}
type ContentMapStateToPropsType = {
	users: Array<UsersItemsType>
	postData: PostDataType[]
	newPostText: string
	authUser: AuthUserType
	userProfile: UserProfileType | null
	status: string
	isFetching: boolean
}
type ContentMapDispatchToPropsType = {
	updateTextarea: (text: string) => void
	addPost: (message: string) => void
	deletePost: (postId: number) => void
	getUserProfile: (userId: number) => void
	getStatusProfile: (userId: number) => void
	updateStatusProfile: (mess: string) => void
}

type PathParamsType = {
	userId: string
}

export type ContentContainerType = ContentMapStateToPropsType &
	ContentMapDispatchToPropsType & { router: { params: PathParamsType } }

export default compose<React.ComponentType>(
	connect(mapStateToProps, {
		updateTextarea,
		addPost,
		deletePost,
		getUserProfile,
		getStatusProfile,
		updateStatusProfile
	}),
	withRouter,
	withAuthRedirect
)(ContentContainer)
