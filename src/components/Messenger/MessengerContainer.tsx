import React from 'react'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { Messenger } from './Messenger'

class MessengerContainer extends React.Component<MessengerContainerType> {
	componentDidMount() {}

	render() {
		return <Messenger {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): MessengerMapStateToPropsType => {
	return {}
}
type MessengerMapStateToPropsType = {}
type MessengerMapDispatchToPropsType = {}
type MessengerContainerType =
	| MessengerMapDispatchToPropsType
	| MessengerMapStateToPropsType
export default connect(mapStateToProps, {})(MessengerContainer)
