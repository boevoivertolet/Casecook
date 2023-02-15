import React from 'react'
import { connect } from 'react-redux'
import {
	getUsers,
	InitialUsersStateType,
	UsersItemsType
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
		users: state.users
	}
}
type FriendsMapStateToPropsType = {
	users: InitialUsersStateType
}
type FriendsMapDispatchToPropsType = {
	getUsers: (currentPage: number, pageSize: number) => void
}
type FriendsContainerType = FriendsMapDispatchToPropsType &
	FriendsMapStateToPropsType
export default connect(mapStateToProps, { getUsers })(FriendsContainer)
