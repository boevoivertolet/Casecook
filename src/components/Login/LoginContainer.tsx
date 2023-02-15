import React from 'react'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { Login } from './Login'

class LoginContainer extends React.Component<LoginContainerType> {
	componentDidMount() {}

	render() {
		return <Login {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): LoginMapStateToPropsType => {
	return {}
}
type LoginMapStateToPropsType = {}
type LoginMapDispatchToPropsType = {}
type LoginContainerType = LoginMapDispatchToPropsType & LoginMapStateToPropsType
export default connect(mapStateToProps, {})(LoginContainer)
