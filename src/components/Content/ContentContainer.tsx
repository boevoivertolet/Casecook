import React from 'react'
import {
	updateTextarea,
	addPost,
	deletePost
} from '../../reducers/contentReducer'
import { connect } from 'react-redux'
import { PostDataType } from '../../reducers/contentReducer'
import { ReduxRootStateType } from '../../store'
import Content from './Content'
import { AuthUserType } from '../../reducers/authReducer'

class ContentContainer extends React.Component<ContentContainerType> {
	componentDidMount(): void {}

	render() {
		return (
			<Content
				authUser={this.props.authUser}
				postData={this.props.postData}
				newPostText={this.props.newPostText}
				updateTextarea={this.props.updateTextarea}
				addPost={this.props.addPost}
				deletePost={this.props.deletePost}
			/>
		)
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): ContentMapStateToPropsType => {
	return {
		postData: state.content.postData,
		newPostText: state.content.newPostText,
		authUser: state.auth.data
	}
}
type ContentMapStateToPropsType = {
	postData: PostDataType[]
	newPostText: string
	authUser: AuthUserType
}
type ContentMapDispatchToPropsType = {
	updateTextarea: (text: string) => void
	addPost: (message: string) => void
	deletePost: (postId: number) => void
}

type ContentContainerType = ContentMapStateToPropsType &
	ContentMapDispatchToPropsType

export default connect(mapStateToProps, {
	updateTextarea,
	addPost,
	deletePost
})(ContentContainer)
