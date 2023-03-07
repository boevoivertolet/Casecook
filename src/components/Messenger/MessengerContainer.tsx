import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AuthUserType } from '../../reducers/authReducer'
import { ReduxRootStateType } from '../../store'
import { Messenger } from './Messenger'

class MessengerContainer extends React.Component<MessengerContainerType> {
	componentDidMount() {}

	render() {
		if (!this.props.authUser.isAuth) return <Navigate to={'/login'} />
		return <Messenger />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): MessengerMapStateToPropsType => {
	return {
		authUser: state.auth.data
	}
}
type MessengerMapStateToPropsType = {
	authUser: AuthUserType
}
type MessengerMapDispatchToPropsType = {}
type MessengerContainerType = MessengerMapDispatchToPropsType &
	MessengerMapStateToPropsType
export default connect(mapStateToProps, {})(MessengerContainer)
