import React from 'react'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { Settings } from './Settings'

class SettingsContainer extends React.Component<SettingsContainerType> {
	componentDidMount() {}

	render() {
		return <Settings {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): SettingsMapStateToPropsType => {
	return {}
}
type SettingsMapStateToPropsType = {}
type SettingsMapDispatchToPropsType = {}
type SettingsContainerType = SettingsMapDispatchToPropsType &
	SettingsMapStateToPropsType
export default connect(mapStateToProps, {})(SettingsContainer)
