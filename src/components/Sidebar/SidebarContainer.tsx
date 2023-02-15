import React from 'react'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { Sidebar } from './Sidebar'

class SidebarContainer extends React.Component<SidebarContainerType> {
	componentDidMount() {}

	render() {
		return <Sidebar {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): HeaderMapStateToPropsType => {
	return {}
}
type HeaderMapStateToPropsType = {}
type HeaderMapDispatchToPropsType = {}
type SidebarContainerType = HeaderMapDispatchToPropsType &
	HeaderMapStateToPropsType
export default connect(mapStateToProps, {})(SidebarContainer)
