import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form'
import {Textarea} from './FormsControl/FormsControls'
import s from '../common/AddPostForm.module.css'
import {UniversalButton} from './UniversalButton'
import React, {ChangeEvent, useState} from "react";


const AddPostFormNew: React.FC<InjectedFormProps<AddPostFormDataType>> = (
    props
) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeOn = () => {
        setEditMode(true)
    }
    const editModeOff = () => {
        if (!props.dirty) {
            setEditMode(false)
        }

    }


    return (

        <div className = {s.addPostForm}>
            {!editMode
                ? <div className = {s.whatsNew} onClick = {editModeOn}></div>
                : <form className = {s.form} onBlur = {editModeOff} onSubmit = {props.handleSubmit}>
                    <Field autoFocus
                           className = {s.field}
                           component = {Textarea}
                           name = {'newPostBody'}
                           placeholder = {"What's new ?"}
                    />
                    <UniversalButton onClick={props.reset}  title = {'post'} />

                </form>

            }
        </div>
    )


}

export const AddPostFormReduxNew = reduxForm<AddPostFormDataType>({
    form: 'AddPostForm'
})(AddPostFormNew)

export type AddPostFormDataType = {
    newPostBody: string

}
