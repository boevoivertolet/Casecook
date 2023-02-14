import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'

class HeaderContainer extends React.Component<HeaderContainerType> {
	componentDidMount() {}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): HeaderMapStateToPropsType => {
	return {}
}
type HeaderMapStateToPropsType = {}
type HeaderMapDispatchToPropsType = {}
type HeaderContainerType =
	| HeaderMapDispatchToPropsType
	| HeaderMapStateToPropsType
export default connect(mapStateToProps, {})(HeaderContainer)
