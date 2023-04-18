import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from './FormsControl/FormsControls'
import s from '../common/AddPostForm.module.css'
import {UniversalButton} from './UniversalButton'
import React, {useEffect, useState} from 'react'
import Modal from "../features/modal/Modal";

const AddPostFormNew: React.FC<InjectedFormProps<AddPostFormDataType>> = (
    props
) => {
    const [active, setActive] = useState<boolean>(false)
    const whatsNew = s.whatsNew



    return (

        <Modal  className = {whatsNew} active = {active} setActive = {setActive} title = {"What's new?"}>
            <div className = {s.addPostForm}>
                <form className = {s.form} onSubmit = {props.handleSubmit}>
                    <Field
                        id = {'tx'}
                        autoFocus
                        className = {s.field}
                        component = {Textarea}
                        name = {'newPostBody'}
                        placeholder = {"What's new?"}
                    />
                    <UniversalButton title = {'post'} />
                </form>
            </div>
        </Modal>


        // <div onMouseLeave = {editModeOff} className = {s.addPostForm}>
        //     {!editMode
        //         ? <div className = {s.whatsNew} onMouseEnter = {editModeOn}> What's new?</div>
        //         :
        //         <form className = {s.form} onSubmit = {props.handleSubmit}>
        //             <Field
        //                 id = {'tx'}
        //                 autoFocus
        //                 className = {s.field}
        //                 component = {Textarea}
        //                 name = {'newPostBody'}
        //                 placeholder = {"What's new?"}
        //             />
        //             <UniversalButton title = {'post'} />
        //         </form>
        //     }
        // </div>

        // <div onBlur={editModeOff} className={s.addPostForm}>
        // 	{!editMode ? (
        // 		<div className={s.whatsNew} onClick={editModeOn}>
        // 			{' '}
        // 			What's new?
        // 		</div>
        // 	) : (
        // 		<form
        // 			onClick={(e: any) => {
        // 				e.stopPropagation()
        // 			}}
        // 			className={s.form}
        // 			onSubmit={props.handleSubmit}>
        // 			<Field
        // 				autoFocus
        // 				id={'tx'}
        // 				className={s.field}
        // 				component={Textarea}
        // 				name={'newPostBody'}
        // 				placeholder={"What's new?"}
        // 			/>
        // 			<UniversalButton title={'post'} />
        // 		</form>
        // 	)}
        // </div>

        // <div className = {s.addPostForm} onBlur = {editModeOff} onClick = {editModeOn} id = {'tx'}>
        //     <form className = {editMode ? s.form : s.whatsNew}
        //           onSubmit = {props.handleSubmit}>
        //         {
        //             editMode &&
        //             <Field
        //                 id = {'tx'}
        //                 className = {s.field}
        //                 component = {Textarea}
        //                 name = {'newPostBody'}
        //                 placeholder = {"What's new?"}
        //             />
        //         }
        //         {editMode && <UniversalButton title = {'post'} />}
        //     </form>
        // </div>


    )
}

export const AddPostFormReduxNew = reduxForm<AddPostFormDataType>({
    form: 'AddPostForm'
})(AddPostFormNew)

export type AddPostFormDataType = {
    newPostBody: string
}
