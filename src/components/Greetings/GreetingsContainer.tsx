import React from 'react'
import { Greetings } from './Greetings'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { Navigate } from 'react-router-dom'

class GreetingsContainer extends React.Component<GreetingsContainerType> {
	componentDidMount() {}

	render() {
		if (!this.props.isAuth) return <Navigate to='/login' />
		if (this.props.isAuth) return <Navigate to='/my-profile' />
		return <Greetings {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): GreetingsMapStateToPropsType => {
	return {
		isAuth: state.auth.data.isAuth
	}
}
type GreetingsMapStateToPropsType = {
	isAuth: boolean
}
type GreetingsMapDispatchToPropsType = {}
type GreetingsContainerType = GreetingsMapDispatchToPropsType &
	GreetingsMapStateToPropsType
export default connect(mapStateToProps, {})(GreetingsContainer)
