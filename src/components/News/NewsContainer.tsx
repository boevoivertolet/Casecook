import React from 'react'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../../store'
import { News } from './News'

class NewsContainer extends React.Component<NewsContainerType> {
	componentDidMount() {}

	render() {
		return <News {...this.props} />
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): NewsMapStateToPropsType => {
	return {}
}
type NewsMapStateToPropsType = {}
type NewsMapDispatchToPropsType = {}
type NewsContainerType = NewsMapDispatchToPropsType & NewsMapStateToPropsType
export default connect(mapStateToProps, {})(NewsContainer)
