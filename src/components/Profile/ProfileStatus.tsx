import React, { ChangeEvent } from 'react'
import s from '../Content/Content.module.css'

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deActivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatusProfile(this.state.status)
	}
	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({ status: e.currentTarget.value })
	}
	componentDidUpdate(
		prevProps: Readonly<ProfileStatusPropsType>,
		prevState: Readonly<{}>,
		snapshot?: any
	) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	}

	render() {
		return (
			<div className={s.profileStatus}>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.activateEditMode}>
							{this.state.status === ''
								? 'no status'
								: this.state.status}
						</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus
							onBlur={this.deActivateEditMode}
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		)
	}
}

type ProfileStatusPropsType = {
	status: string
	updateStatusProfile: (status: string) => void
}
