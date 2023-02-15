import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { getAuthUserData, UserType } from '../../reducers/authReducer'

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
		user: state.auth
	}
}
type HeaderMapStateToPropsType = {
	user: UserType
}
type HeaderMapDispatchToPropsType = {
	getAuthUserData: () => void
}
type HeaderContainerType = HeaderMapDispatchToPropsType &
	HeaderMapStateToPropsType
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
