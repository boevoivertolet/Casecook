import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../reducers/authReducer'
import { ReduxRootStateType } from '../../store'
import { Login } from './Login'
import { LoginFormDataType } from './LoginForm'

class LoginContainer extends React.Component<LoginContainerType> {
	componentDidMount() {}

	render() {
		return <Login {...this.props} isAuth={this.props.isAuth} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): LoginMapStateToPropsType => {
	return {
		isAuth: state.auth.data.isAuth
	}
}
type LoginMapStateToPropsType = {
	isAuth: boolean
}
type LoginMapDispatchToPropsType = {
	login: (formData: LoginFormDataType) => void
}
type LoginContainerType = LoginMapDispatchToPropsType & LoginMapStateToPropsType
export default connect(mapStateToProps, { login })(LoginContainer)
