import { ChangeEvent, useState } from 'react'

export const ProfileStatus = (props: ProfileStatusPropsType) => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState<string>(props.status)
	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatusProfile(status)
	}
	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode && (
				<div>
					<span onDoubleClick={activateEditMode}>{status}</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						onChange={onStatusChange}
						autoFocus
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>
			)}
		</div>
	)
}

type ProfileStatusPropsType = {
	status: string
	updateStatusProfile: (mess: string) => void
}
