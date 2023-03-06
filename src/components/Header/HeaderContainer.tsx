import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import {
	AuthUserType,
	getAuthUserData,
	logout
} from '../../reducers/authReducer'

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
		authUser: state.auth.data
	}
}
type HeaderMapStateToPropsType = {
	authUser: AuthUserType
}
type HeaderMapDispatchToPropsType = {
	getAuthUserData: () => void
	logout: () => void
}
type HeaderContainerType = HeaderMapDispatchToPropsType &
	HeaderMapStateToPropsType
export default connect(mapStateToProps, { getAuthUserData, logout })(
	HeaderContainer
)
