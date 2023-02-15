import React from 'react'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { Music } from './Music'

class MusicContainer extends React.Component<MusicContainerType> {
	componentDidMount() {}

	render() {
		return <Music {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): MusicMapStateToPropsType => {
	return {}
}
type MusicMapStateToPropsType = {}
type MusicMapDispatchToPropsType = {}
type MusicContainerType = MusicMapDispatchToPropsType & MusicMapStateToPropsType
export default connect(mapStateToProps, {})(MusicContainer)
