import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'
import s from '../Content/Content.module.css'

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatusProfile(status)
    }
    const onEnterDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            props.updateStatusProfile(status)
        }
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div className={s.profileStatus}>
            {!editMode && (
                <div>
						<span onDoubleClick={activateEditMode}>
							{props.status || 'status'}
						</span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        onKeyDown={onEnterDown}
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
