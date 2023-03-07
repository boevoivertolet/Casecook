import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AuthUserType } from '../../reducers/authReducer'
import { ReduxRootStateType } from '../../store'
import { Music } from './Music'

class MusicContainer extends React.Component<MusicContainerType> {
	componentDidMount() {}

	render() {
		if (!this.props.authUser.isAuth) return <Navigate to={'/login'} />
		return <Music />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): MusicMapStateToPropsType => {
	return {
		authUser: state.auth.data
	}
}
type MusicMapStateToPropsType = {
	authUser: AuthUserType
}
type MusicMapDispatchToPropsType = {}
type MusicContainerType = MusicMapDispatchToPropsType & MusicMapStateToPropsType
export default connect(mapStateToProps, {})(MusicContainer)
