import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { UniversalButton } from '../../common/UniversalButton'
import s from './Login.module.css'

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (
	props
) => {
	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<div className={s.field}>
				<Field placeholder={'email'} component={'input'} name={'email'} />
			</div>
			<div className={s.field}>
				<Field
					type='password'
					placeholder={'password'}
					component={'input'}
					name={'password'}
				/>
			</div>
			<div>
				<Field type={'checkbox'} component={'input'} name={'rememberMe'} />
				remember me
			</div>
			<div>
				<UniversalButton title={'Login'} />
				<UniversalButton title={'Registration'} />
			</div>
		</form>
	)
}
export const LoginReduxForm = reduxForm<LoginFormDataType>({ form: 'login' })(
	LoginForm
)

export type LoginFormDataType = {
	email: string
	password: string
	rememberMe: boolean
}
