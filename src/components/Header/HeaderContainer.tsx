import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { AuthUserType, getAuthUserData } from '../../reducers/authReducer'

class HeaderContainer extends React.Component<HeaderContainerType> {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): HeaderMapStateToPropsType => {
	return {
		authUser: state.auth
	}
}
type HeaderMapStateToPropsType = {
	authUser: AuthUserType
}
type HeaderMapDispatchToPropsType = {
	getAuthUserData: () => void
}
type HeaderContainerType = HeaderMapDispatchToPropsType &
	HeaderMapStateToPropsType
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
