import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AuthUserType } from '../../reducers/authReducer'
import { ReduxRootStateType } from '../../store'
import { News } from './News'

class NewsContainer extends React.Component<NewsContainerType> {
	componentDidMount() {}

	render() {
		if (!this.props.authUser.isAuth) return <Navigate to={'/login'} />
		return <News />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): NewsMapStateToPropsType => {
	return {
		authUser: state.auth.data
	}
}
type NewsMapStateToPropsType = {
	authUser: AuthUserType
}
type NewsMapDispatchToPropsType = {}
type NewsContainerType = NewsMapDispatchToPropsType & NewsMapStateToPropsType
export default connect(mapStateToProps, {})(NewsContainer)
