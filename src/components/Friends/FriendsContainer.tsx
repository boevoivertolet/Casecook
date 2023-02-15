import React from 'react'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { Friends } from './Friends'

class FriendsContainer extends React.Component<FriendsContainerType> {
	componentDidMount() {}

	render() {
		return <Friends {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): FriendsMapStateToPropsType => {
	return {}
}
type FriendsMapStateToPropsType = {}
type FriendsMapDispatchToPropsType = {}
type FriendsContainerType = FriendsMapDispatchToPropsType &
	FriendsMapStateToPropsType
export default connect(mapStateToProps, {})(FriendsContainer)
