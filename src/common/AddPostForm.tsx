import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from './FormsControl/FormsControls'
import s from '../components/Content/Content.module.css'
import {UniversalButton} from './UniversalButton'
import React, {ChangeEvent, useState} from "react";


const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (
    props
) => {


    const [editMode, setEditMode] = useState<boolean>(false)


    const editModeOn = () => {
        setEditMode(true)

    }
    const editModeOff = () => {
        setEditMode(false)
    }


    return (

        <div onBlur = {editModeOff} >
            {editMode ?
                <form className = {s.textarea} onSubmit = {props.handleSubmit}>
                    <div className = {s.textareaButton}>
                        <Field autoFocus
                               className = {s.field}
                            // validate={[requiredField, maxLengthCreator10]}
                               component = {Textarea}
                               name = {'newPostBody'}
                               placeholder = {"What's new ?"}
                        />
                    </div>
                    <div className = {s.button}>
                        <UniversalButton title = {'post'} />
                    </div>
                </form>
                : <div onClick = {editModeOn} >Privet</div>
            }
        </div>
    )
}

export const AddPostFormRedux = reduxForm<AddPostFormDataType>({
    form: 'AddPostForm'
})(AddPostForm)

export type AddPostFormDataType = {
    newPostBody: string

}
