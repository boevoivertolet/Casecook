import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Textarea } from './FormsControl/FormsControls'
import s from '../components/Content/Content.module.css'
import { UniversalButton } from './UniversalButton'
import {useState} from "react";



const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (
	props
) => {


	return (

		<form className={s.textarea} onSubmit={props.handleSubmit}>
			<div className={s.textareaButton}>
				<Field autoFocus
					className={s.field}
					// validate={[requiredField, maxLengthCreator10]}
					component={Textarea}
					name={'newPostBody'}
					placeholder={"What's new ?"}
				/>
			</div>
			<div className={s.button}>
				<UniversalButton title={'post'} />
			</div>
		</form>
	)
}

export const AddPostFormRedux = reduxForm<AddPostFormDataType>({
	form: 'AddPostForm'
})(AddPostForm)

export type AddPostFormDataType = {
	newPostBody: string
}
