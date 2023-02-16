import React from 'react'
import { connect } from 'react-redux'
import {
	getUsers,
	InitialUsersStateType,
	follow,
	unFollow,
	setCurrentPage,
	setIsFollowingProgress
} from '../../reducers/usersReducer'
import { ReduxRootStateType } from '../../store'
import { Friends } from './Friends'

class FriendsContainer extends React.Component<FriendsContainerType> {
	componentDidMount() {
		this.props.getUsers(
			this.props.users.currentPage,
			this.props.users.pageSize
		)
	}

	render() {
		return <Friends {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): FriendsMapStateToPropsType => {
	return {
		users: state.users,
		pageSize: state.users.pageSize,
		totalCount: state.users.totalCount,
		currentPage: state.users.currentPage
	}
}
type FriendsMapStateToPropsType = {
	users: InitialUsersStateType
	pageSize: number
	totalCount: number
	currentPage: number
}
type FriendsMapDispatchToPropsType = {
	follow: (userId: string) => void
	unFollow: (userId: string) => void
	setCurrentPage: (currentPage: number) => void
	setIsFollowingProgress: (isFetching: boolean, userId: string) => void
	getUsers: (currentPage: number, pageSize: number) => void
}
type FriendsContainerType = FriendsMapDispatchToPropsType &
	FriendsMapStateToPropsType
export default connect(mapStateToProps, {
	follow,
	unFollow,
	setCurrentPage,
	setIsFollowingProgress,
	getUsers
})(FriendsContainer)
