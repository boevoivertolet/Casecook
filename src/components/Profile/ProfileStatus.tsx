import React, {ChangeEvent, useState} from 'react'
import s from '../Content/Content.module.css'

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
            props.updateStatusProfile(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div className={s.profileStatus}>
            {!editMode && (
                <div>
						<span onDoubleClick={activateEditMode}>
							{props.status || '----'}
						</span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus
                        onBlur={deActivateEditMode}
                        value={status}
                    />
                </div>
            )}
        </div>
    )

}

type ProfileStatusPropsType = {
    status: string
    updateStatusProfile: (status: string) => void
}
